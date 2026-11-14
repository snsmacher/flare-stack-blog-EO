import { publicCommentUrl } from "@/features/comments/comment-url";
import * as CommentRepo from "@/features/comments/data/comments.data";
import { generateUnsubscribeToken } from "@/features/email/email.utils";
import { publishNotificationEvent } from "@/features/notification/service/notification.publisher";
import * as MutedUserRepo from "@/features/muted-users/data/muted-users.data";
import { isMuted } from "@/features/muted-users/muted-users";
import { serverEnv } from "@/lib/env/server.env";

interface SendReplyNotificationParams {
  comment: {
    id: number;
    rootId: number | null;
    replyToCommentId: number | null;
    userId: string | null;
    content: string | null;
  };
  post: {
    slug: string;
    title: string;
  };
  skipNotifyUserId?: string;
}

export async function sendReplyNotification(
  context: DbContext & { executionCtx: ExecutionContext },
  params: SendReplyNotificationParams,
): Promise<void> {
  const { comment, post } = params;

  if (!comment.replyToCommentId) return;

  // Get the author of the comment being replied to
  const replyToAuthor = await CommentRepo.getCommentAuthorWithEmail(
    context.db,
    comment.replyToCommentId,
  );

  if (!replyToAuthor || !replyToAuthor.email) {
    console.log(
      JSON.stringify({
        message: "reply notification skipped, author not found or no email",
        replyToCommentId: comment.replyToCommentId,
      }),
    );
    return;
  }

  // A reply to a deleted Comment has no live thread to return to, and a
  // muted author has asked to be left alone — either way the notification
  // would be noise, so neither one goes out.
  const replyToComment = await CommentRepo.findCommentById(
    context.db,
    comment.replyToCommentId,
  );
  if (replyToComment && replyToComment.status !== "published") {
    console.log(
      JSON.stringify({
        message: "reply notification skipped, reply-to comment is deleted",
        replyToCommentId: comment.replyToCommentId,
      }),
    );
    return;
  }

  const replyToActor = await MutedUserRepo.findUserById(
    context.db,
    replyToAuthor.id,
  );
  if (isMuted(replyToActor?.mutedAt)) {
    console.log(
      JSON.stringify({
        message: "reply notification skipped, reply-to author is muted",
        userId: replyToAuthor.id,
      }),
    );
    return;
  }

  // Don't notify if replying to own comment
  if (comment.userId && replyToAuthor.id === comment.userId) {
    console.log(
      JSON.stringify({ message: "reply notification skipped, self-reply" }),
    );
    return;
  }

  // Don't notify if the moderator is the reply-to author (they already read the comment)
  if (params.skipNotifyUserId && replyToAuthor.id === params.skipNotifyUserId) {
    console.log(
      JSON.stringify({
        message: "reply notification skipped, moderator is reply-to author",
      }),
    );
    return;
  }

  // Get replier info
  const replier = await CommentRepo.getCommentAuthorWithEmail(
    context.db,
    comment.id,
  );
  const replierName = replier?.name ?? "有人";
  const replyPreview = (comment.content ?? "").slice(0, 100);

  const { DOMAIN, BETTER_AUTH_SECRET } = serverEnv(context.env);
  const unsubscribeType = "reply_notification" as const;
  const token = await generateUnsubscribeToken(
    BETTER_AUTH_SECRET,
    replyToAuthor.id,
    unsubscribeType,
  );
  const unsubscribeUrl = `https://${DOMAIN}/unsubscribe?userId=${replyToAuthor.id}&type=${unsubscribeType}&token=${token}`;

  const commentUrl = publicCommentUrl(DOMAIN, post.slug, comment.id);

  try {
    await publishNotificationEvent(
      { db: context.db, env: context.env, executionCtx: context.executionCtx },
      {
        type:
          replyToAuthor.role === "admin"
            ? "comment.reply_to_admin_published"
            : "comment.reply_to_user_published",
        data: {
          postTitle: post.title,
          replierName,
          replyPreview: `${replyPreview}${replyPreview.length >= 100 ? "..." : ""}`,
          commentUrl,
        },
      },
      { to: replyToAuthor.email, unsubscribeUrl },
    );

    console.log(
      JSON.stringify({
        message: "reply notification queued",
        to: replyToAuthor.email,
        commentId: comment.id,
      }),
    );
  } catch (error) {
    console.error(
      JSON.stringify({
        message: "reply notification queue failed",
        commentId: comment.id,
        error: error instanceof Error ? error.message : String(error),
      }),
    );
  }
}

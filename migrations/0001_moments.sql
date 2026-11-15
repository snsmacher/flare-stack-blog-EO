-- 动态（Moments，ADR 0037）与评论多态化。对应上游 D1 迁移 0032/0033：
-- SQLite 因不能原地改列而重建 comments 表，PostgreSQL 用 ALTER 即可。
CREATE TABLE "moments" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" text DEFAULT '' NOT NULL,
	"video" jsonb,
	"save_token" text NOT NULL,
	"posted_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "moments_posted_at_idx" ON "moments" ("posted_at","id");--> statement-breakpoint
CREATE TABLE "moment_images" (
	"moment_id" integer NOT NULL,
	"position" integer NOT NULL,
	"media_id" integer NOT NULL,
	CONSTRAINT "moment_images_moment_id_position_pk" PRIMARY KEY("moment_id","position"),
	CONSTRAINT "moment_images_moment_id_moments_id_fk" FOREIGN KEY ("moment_id") REFERENCES "public"."moments"("id") ON DELETE cascade ON UPDATE no action,
	CONSTRAINT "moment_images_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action
);
--> statement-breakpoint
CREATE INDEX "moment_images_media_idx" ON "moment_images" ("media_id");--> statement-breakpoint
ALTER TABLE "comments" ALTER COLUMN "post_id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "comments" ADD COLUMN "moment_id" integer;--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_moment_id_moments_id_fk" FOREIGN KEY ("moment_id") REFERENCES "public"."moments"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "comments_moment_root_created_idx" ON "comments" ("moment_id","root_id","created_at");--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_one_target" CHECK (("post_id" IS NULL) <> ("moment_id" IS NULL));

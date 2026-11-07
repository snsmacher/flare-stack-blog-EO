import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/images/$")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const key = new URL(request.url).pathname.slice("/images/".length);
        if (!key) {
          return new Response("Image key is required", { status: 400 });
        }

        try {
          // Pages don't need the media service, so the route tree leaves it out.
          const MediaService =
            await import("@/features/media/service/media.service");
          return await MediaService.handleImageRequest(key);
        } catch (error) {
          console.error(
            JSON.stringify({
              message: "image fetch failed",
              key,
              error: error instanceof Error ? error.message : String(error),
            }),
          );
          return new Response("Internal server error", { status: 500 });
        }
      },
    },
  },
});

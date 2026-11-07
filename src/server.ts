import handler from "@tanstack/react-start/server-entry";
import { nodeEnv } from "@/lib/env/node-bindings";
import { paraglideMiddleware } from "@/paraglide/server";

declare module "@tanstack/react-start" {
  interface Register {
    server: {
      requestContext: {
        env: Env;
        executionCtx: ExecutionContext<unknown>;
      };
    };
  }
}

// Node has no waitUntil. Detached promises are close enough: the process stays
// alive between requests, so the work survives the response being sent.
const executionCtx = {
  waitUntil(promise: Promise<unknown>) {
    void Promise.resolve(promise).catch((error) => {
      console.error(
        JSON.stringify({
          message: "background task failed",
          error: String(error),
        }),
      );
    });
  },
  passThroughOnException() {},
} as unknown as ExecutionContext<unknown>;

// The app reads configuration and bindings off a single `env` object, the way
// Workers hands them over. `nodeEnv` builds one from `process.env` plus the
// in-process binding stand-ins; see `lib/env/node-bindings.ts`.
const env = nodeEnv;

export default {
  fetch(request: Request): Promise<Response> | Response {
    return paraglideMiddleware(request, () =>
      handler.fetch(request, {
        context: {
          env,
          executionCtx,
        },
      }),
    );
  },
};

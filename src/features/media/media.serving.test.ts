import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { afterAll, describe, expect, it } from "vitest";
import { handleImageRequest } from "./service/media.service";

/**
 * What /images/{key} answers.
 *
 * Image transforms are gone (EdgeOne discontinued their image processing), so
 * every request returns the stored bytes unchanged. Off EdgeOne, objects are
 * read from `.data/blob-media`, which is what these cases seed.
 */
const ROOT = path.join(process.cwd(), ".data/blob-media");
const KEY = `serving-test-${process.pid}.svg`;
const SVG =
  '<svg xmlns="http://www.w3.org/2000/svg"><script>alert(document.cookie)</script></svg>';

describe("serving /images/{key}", () => {
  it("serves the stored bytes as a sandboxed document that cannot run script", async () => {
    const file = path.join(ROOT, KEY);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, SVG);

    const response = await handleImageRequest(KEY);

    expect(response.status).toBe(200);
    // Type comes from the key, not from the store: an SVG must not be handed
    // over as an octet-stream the browser might download and open later.
    expect(response.headers.get("Content-Type")).toBe("image/svg+xml");
    expect(response.headers.get("Content-Security-Policy")).toContain(
      "default-src 'none'",
    );
    expect(response.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(await response.text()).toBe(SVG);
  });

  it("answers 404 for a key that was never stored", async () => {
    const response = await handleImageRequest("never-stored.png");

    expect(response.status).toBe(404);
  });

  afterAll(async () => {
    await rm(path.join(ROOT, KEY), { force: true });
  });
});

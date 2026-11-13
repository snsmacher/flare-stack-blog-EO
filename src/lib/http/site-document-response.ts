export function siteDocumentResponse(
  body: BodyInit | null,
  contentType: string,
  cacheControl: string,
  method: string,
) {
  // EdgeOne only reads Cache-Control; a hardcoded CDN-Cache-Control here used
  // to override every document back to the HTML window on platforms that do
  // read it. The constants keep their CDN entries for a move back — this
  // response simply carries one header, the one the edge honours.
  return new Response(method === "HEAD" ? null : body, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": cacheControl,
    },
  });
}

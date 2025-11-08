export function GET({ request }: { request: Request }) {
  const currentUrl = request.url;
  const lang = new URL(currentUrl).pathname.startsWith("/en/") ? "en/" : "";
  const url = new URL(`/${lang}`, request.url);
  return Response.redirect(url.toString(), 302);
}
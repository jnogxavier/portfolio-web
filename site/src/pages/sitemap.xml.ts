import { getCollection } from 'astro:content';

export async function GET({ site }: { site: URL }) {
  const pt = (await getCollection('casos')).map((c) => `/casos/${c.id}/`);
  const en = (await getCollection('casosEn')).map((c) => `/en/casos/${c.id}/`);
  const urls = ['/', '/en/', '/curriculo/', '/en/resume/', ...pt, ...en];
  const corpo = urls.map((u) => `  <url><loc>${new URL(u, site).href}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${corpo}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}

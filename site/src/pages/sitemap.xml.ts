import { getCollection } from 'astro:content';
import { execFileSync } from 'node:child_process';

// Data do último commit que tocou o caminho; sem histórico, a URL sai sem lastmod.
const ultimoCommit = (caminho: string) => {
  try {
    return execFileSync('git', ['log', '-1', '--format=%cs', '--', caminho], { encoding: 'utf-8' }).trim();
  } catch {
    return '';
  }
};

export async function GET({ site }: { site: URL }) {
  const pt = (await getCollection('casos')).map((c) => [`/casos/${c.id}/`, `src/content/casos/${c.id}.md`]);
  const en = (await getCollection('casosEn')).map((c) => [`/en/casos/${c.id}/`, `src/content/casos-en/${c.id}.md`]);
  const urls = [['/', 'src'], ['/en/', 'src'], ...pt, ...en];
  const corpo = urls.map(([u, fonte]) => {
    const data = ultimoCommit(fonte);
    return `  <url><loc>${new URL(u, site).href}</loc>${data ? `<lastmod>${data}</lastmod>` : ''}</url>`;
  }).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${corpo}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}

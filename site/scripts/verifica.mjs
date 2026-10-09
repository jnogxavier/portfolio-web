// Verifica o site construído antes de publicar. Roda depois de `npm run build`.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const raiz = resolve(import.meta.dirname, '..');
const dist = join(raiz, 'dist');
const site = readFileSync(join(raiz, 'astro.config.mjs'), 'utf8').match(/site:\s*'([^']+)'/)[1].replace(/\/$/, '');
const host = new URL(site).host;
const erros = [];
const le = (arquivo) => (existsSync(join(dist, arquivo)) ? readFileSync(join(dist, arquivo), 'utf8') : null);

const paginas = [{ url: '', arquivo: 'index.html' }, { url: 'en/', arquivo: 'en/index.html' }];
for (const [idioma, pasta] of [['pt', 'casos'], ['en', 'casos-en']]) {
  for (const md of readdirSync(join(raiz, 'src/content', pasta)).filter((a) => a.endsWith('.md'))) {
    const id = md.replace(/\.md$/, '');
    const url = `${idioma === 'en' ? 'en/' : ''}casos/${id}/`;
    paginas.push({ url, arquivo: `${url}index.html`, caso: { idioma, id } });
  }
}

for (const { url, arquivo, caso } of paginas) {
  const html = le(arquivo);
  if (!html) { erros.push(`${arquivo}: página não foi gerada`); continue; }
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== `${site}/${url}`) erros.push(`${arquivo}: canonical ${canonical} em vez de ${site}/${url}`);
  if (!caso) continue;
  const imagem = html.match(/property="og:image" content="([^"]+)"/)?.[1];
  const esperada = `${site}/og/${caso.idioma}/${caso.id}.png`;
  if (imagem !== esperada) erros.push(`${arquivo}: og:image ${imagem} em vez de ${esperada}`);
  if (!existsSync(join(dist, 'og', caso.idioma, `${caso.id}.png`))) erros.push(`${arquivo}: falta o arquivo do cartão`);
  const artigo = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1])).find((d) => d['@type'] === 'Article');
  if (!artigo?.headline) erros.push(`${arquivo}: sem Article nos dados estruturados`);
}

const hosts = new Set();
const varre = (pasta) => {
  for (const e of readdirSync(join(dist, pasta), { withFileTypes: true })) {
    const caminho = join(pasta, e.name);
    if (e.isDirectory()) varre(caminho);
    else if (/\.(html|xml|txt)$/.test(e.name)) for (const m of readFileSync(join(dist, caminho), 'utf8').matchAll(/https?:\/\/(jnogxavier\.[a-z.]+)/g)) hosts.add(m[1]);
  }
};
varre('');
for (const h of hosts) if (h !== host) erros.push(`endereço de outro domínio no build: ${h}`);

if (!le('404.html')) erros.push('404.html não foi gerada');

const sitemap = le('sitemap.xml') ?? '';
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length !== paginas.length) erros.push(`sitemap tem ${locs.length} endereços e o site tem ${paginas.length} páginas`);
if (!(le('robots.txt') ?? '').includes(`Sitemap: ${site}/sitemap.xml`)) erros.push('robots.txt não aponta para o sitemap do site');

if (erros.length) { console.error(`${erros.length} problema(s):\n- ${erros.join('\n- ')}`); process.exit(1); }
console.log(`ok: ${paginas.length} páginas em ${host}, sitemap, robots e cartões conferem`);

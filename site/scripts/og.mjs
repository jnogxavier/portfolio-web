// Gera public/og/<idioma>/<caso>.png, um cartão de 1200x630 por caso, a partir
// do título e da linha de contexto. Usa o Chrome: CHROME=/caminho node scripts/og.mjs
import { readdirSync, readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const raiz = resolve(import.meta.dirname, '..');
const fontes = pathToFileURL(join(raiz, 'public/fontes')).href;
const chrome = process.env.CHROME ?? 'google-chrome-stable';
const campo = (texto, nome) => texto.match(new RegExp(`^${nome}:\\s*(.+)$`, 'm'))[1].replace(/^["']|["']$/g, '');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const cartao = (titulo, meta) => `<!doctype html><meta charset="utf-8"><style>
@font-face { font-family: 'Zilla Slab'; font-weight: 700; src: url('${fontes}/zilla-slab-700-latin.woff2'); }
@font-face { font-family: 'Archivo'; font-weight: 350 600; src: url('${fontes}/archivo-350_600-latin.woff2'); }
html, body { margin: 0; width: 1200px; height: 630px; }
body {
  box-sizing: border-box; padding: 72px 80px; display: flex; flex-direction: column;
  justify-content: space-between; align-items: flex-start;
  background: oklch(43.0% 0.137 8.9); color: oklch(94.6% 0.008 354.7);
}
.meta { font: 500 28px/1.3 'Archivo', sans-serif; opacity: 0.8; }
.titulo { font: 700 78px/1.08 'Zilla Slab', serif; letter-spacing: -0.02em; max-width: 1000px; text-wrap: balance; }
.placa { border: 2px solid currentColor; font: 700 30px/1 'Zilla Slab', serif; letter-spacing: -0.02em; padding: 10px 16px 12px; }
</style>
<div class="meta">${esc(meta)}</div>
<div class="titulo">${esc(titulo)}</div>
<div class="placa">jnogxavier</div>`;

const tmp = mkdtempSync(join(tmpdir(), 'og-'));
for (const [idioma, pasta] of [['pt', 'casos'], ['en', 'casos-en']]) {
  const entrada = join(raiz, 'src/content', pasta);
  const saida = join(raiz, 'public/og', idioma);
  mkdirSync(saida, { recursive: true });
  for (const arquivo of readdirSync(entrada).filter((a) => a.endsWith('.md'))) {
    const texto = readFileSync(join(entrada, arquivo), 'utf8');
    const id = arquivo.replace(/\.md$/, '');
    const html = join(tmp, `${idioma}-${id}.html`);
    writeFileSync(html, cartao(campo(texto, 'titulo'), campo(texto, 'meta')));
    execFileSync(chrome, ['--headless=new', '--disable-gpu', '--no-sandbox', '--allow-file-access-from-files',
      '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1200,630', '--virtual-time-budget=3000',
      `--screenshot=${join(saida, id + '.png')}`, pathToFileURL(html).href], { stdio: 'ignore' });
    console.log(`og/${idioma}/${id}.png`);
  }
}
rmSync(tmp, { recursive: true });

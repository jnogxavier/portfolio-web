# jnogxavier-portfolio

Portfólio pessoal de João Vitor Nogueira Xavier — DevOps, Platform Engineer e
desenvolvedor full stack. Site estático em Astro, em português e inglês.

## Rodar

```sh
cd site
npm install
npm run dev
```

`npm run build` gera o site em `site/dist`.

## Domínio

O endereço é `https://jnogxavier.com.br`. `site` em `astro.config.mjs` o define para
canonical, Open Graph, hreflang, JSON-LD e sitemap, e `public/robots.txt` o repete
na linha do sitemap. Mudar de domínio é trocar os dois.

## Publicação

O site é estático e roda como Worker de assets no Cloudflare, sem servidor próprio. `site/wrangler.jsonc` declara a pasta `dist` e os dois domínios, e `.github/workflows/site.yml` faz o resto.

Em todo pull request o workflow roda `npm ci`, `npm run build` e `npm run verifica`, que falha se faltar página ou cartão de compartilhamento, ou se algum endereço do build divergir de `site`. No push para a `main` ele repete isso e publica com o wrangler.

A publicação precisa de dois secrets no repositório: `CLOUDFLARE_API_TOKEN`, do template "Edit Cloudflare Workers" restrito à conta, e `CLOUDFLARE_ACCOUNT_ID`. Para publicar à mão, depois do build: `npx wrangler deploy` dentro de `site`.

## Onde está o quê

- `site/src/content/casos` e `casos-en` — os casos, um arquivo por caso. O campo
  `par` liga a versão em português à versão em inglês.
- `site/src/data` — trajetória, skills e os textos dos diagramas.
- `site/src/i18n.ts` — todo rótulo de interface nos dois idiomas.
- `site/scripts/verifica.mjs` — confere o build antes de publicar: páginas, cartões,
  canonical, sitemap e robots.
- `site/scripts/og.mjs` — gera em `public/og` o cartão de compartilhamento de cada
  caso. Rodar `npm run og` (precisa do Chrome) quando um título ou uma linha de
  contexto mudar.
- `site/src/styles/tokens.css` — cores em OKLCH, espaçamento e tipografia.

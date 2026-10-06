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

`site` em `astro.config.mjs` define o endereço usado em canonical, Open Graph,
hreflang, JSON-LD, sitemap e robots. Está em `https://jnogxavier.com` como
provisório — trocar lá e em `public/robots.txt` quando o domínio for definido.

## Onde está o quê

- `site/src/content/casos` e `casos-en` — os casos, um arquivo por caso. O campo
  `par` liga a versão em português à versão em inglês.
- `site/src/data` — trajetória, skills e os textos dos diagramas.
- `site/src/i18n.ts` — todo rótulo de interface nos dois idiomas.
- `site/scripts/og.mjs` — gera em `public/og` o cartão de compartilhamento de cada
  caso. Rodar `npm run og` (precisa do Chrome) quando um título ou uma linha de
  contexto mudar.
- `site/src/styles/tokens.css` — cores em OKLCH, espaçamento e tipografia.

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

## Onde está o quê

- `site/src/content/casos` e `casos-en` — os casos, um arquivo por caso. O campo
  `par` liga a versão em português à versão em inglês.
- `site/src/data` — trajetória, skills e os textos dos diagramas.
- `site/src/i18n.ts` — todo rótulo de interface nos dois idiomas.
- `site/src/styles/tokens.css` — cores em OKLCH, espaçamento e tipografia.

# jnogxavier-portfolio

Portfólio pessoal de João Vitor Nogueira Xavier — DevOps, Platform Engineer e
desenvolvedor full stack. Site estático em Astro, com design system próprio.

## Estrutura

- `design-system/` — tokens em OKLCH, manual e componentes. Fonte única do
  vocabulário visual. Um script copia os arquivos para o site antes de cada build.
- `site/` — o site em Astro, em português e inglês.

## Rodando

```bash
cd site
npm install
npm run dev
```

O `npm run sync` roda sozinho antes de `dev` e `build`, trazendo os tokens e o
CSS dos componentes do design system.

## Como o conteúdo é organizado

É portfólio, não currículo em HTML. Cada trabalho é contado como caso, nesta
ordem: o que deveria acontecer, o que acontecia, o que eu fiz, o resultado
medido, e o que eu faria diferente. O número fecha o caso, nunca abre.

Casos sem número medido não entram.

## Idiomas

Português na raiz, inglês em `/en/`. Cada caso declara o par no outro idioma
pelo campo `par` do frontmatter, então a troca de idioma vai para a página
equivalente e não para a home.

# Ação

O botão do sistema. Existe em dois papéis e nada além disso.

`jnx-acao` sozinha é a primária: preenchida em `brand`, texto em `surface`.
Com `jnx-acao--secundaria` vira vazada, fundo transparente e texto em
`brand-ink`, mantendo a borda.

Sobre faixa de cor, `jnx-acao--sobre-cor` inverte os dois contra o `band`, sem
criar um terceiro estilo. Era exatamente o que estava acontecendo antes de ela
existir: três definições de botão em três arquivos, com cores diferentes.

## Regras

Altura mínima de 44px e largura mínima de 11ch. Rótulo em uma linha, no
infinitivo e dizendo o que acontece — "Chamar no WhatsApp", não "Clique aqui".

Pressão responde com `scale(0.97)` em 160ms. Hover vive dentro de
`@media (hover: hover)`. O anel de foco usa `--surface` sobre faixa de cor e
`--focus` sobre papel, senão some.

Link externo leva `target="_blank"` e `rel="noopener noreferrer"`: quem clica
não deve perder a página em que estava.

## Onde não usar

Não empilhe mais de dois numa mesma linha. Se há três ações, duas delas não são
ações — são links.

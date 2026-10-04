# Declarado e observado

## A ideia

Todo sistema que o João opera tem dois estados. O que foi declarado — o YAML, o
Terraform, o template de pipeline, a intenção escrita e versionada. E o que é
observado — o que de fato está rodando agora. O trabalho inteiro dele é
reconciliar os dois.

O site é construído sobre essa gramática. Cada caso se lê em três tempos:
declarado, observado, reconciliado. A distância entre o primeiro e o segundo é
onde mora a engenharia, e ela aparece desenhada, não narrada.

Isso resolve a pergunta mais difícil do projeto: o que torna a página
reconhecível como dele sem o nome na tela. Não é a cor nem a fonte — é a
estrutura de duas leituras em desacordo. Nenhum outro portfólio pode usá-la
honestamente, porque ela vem do GitOps que ele mantém, com vinte microsserviços
em quatro ambientes.

## Personalidade

Precisa, honesta, sem sentimentalismo. O site admite o que quebrou porque admitir
é a estrutura, não uma confissão corajosa. Nada de superlativo, nada de
"apaixonado por tecnologia", nada de saudação.

## Princípios

Primeiro: a medida é o argumento. Onde houver número, ele é o maior elemento da
tela. Onde não houver número, não há caso — a seção não entra.

Segundo: o desacordo é informação. Quando duas leituras divergem, o desenho
mostra a divergência em vez de esconder. A régua de desvio existe para isso.

Terceiro: tecnologia é contexto, nunca protagonista. Nenhum logotipo de produto,
nenhuma grade de ícones, nenhuma lista de palavras-chave. O nome de uma
ferramenta só aparece dentro da frase que explica um problema.

Quarto: nada de cartão. Conteúdo distinto se separa por espaço, alinhamento e
régua. Cartão dentro de cartão é proibido, e cartão simples quase sempre é
preguiça de hierarquia. Isso vale em dobro para cromo de página: qualquer coisa
com borda e fundo dentro de uma barra já é caixa dentro de caixa.

O corolário é o círculo. O único elemento redondo do sistema é o nó — o mesmo da
malha. Quando ele aparece vivo, como estado, vem sozinho: ponto e texto, sem
contêiner.

Quinto: se uma decisão é bonita só porque é moderna, e poderia estar em qualquer
portfólio de DevOps, ela sai.

## Tratamento da métrica

É o elemento visual central do sistema, e tem duas formas.

O número não atingido é vazado: contorno em `-webkit-text-stroke`, preenchimento
transparente. Lê como fantasma, como meta que não se cumpriu.

O número atingido é sólido, em `observed`. É o único lugar onde essa cor aparece
em escala grande.

Os dois usam figuras tabulares e a display em corpo entre 3rem e 5.5rem. A
unidade fica ao lado, na linha de base, pequena e apagada. Nunca truncar, nunca
abreviar, nunca animar contagem subindo — contador que sobe é barato e mente
sobre precisão.

## Composição

O padrão é o par: duas colunas de peso igual, declarado à esquerda e observado à
direita, separadas pela régua de desvio que atravessa a largura inteira. Abaixo
delas, o reconciliado ocupa uma coluna só, porque já não há tensão a mostrar.

Em tela estreita o par vira pilha, na mesma ordem, e a régua continua separando.

Texto corrido para em 68 caracteres. A faixa de conteúdo tem 68rem e a mesma
borda interna vale para topo, corpo e rodapé, para que tudo alinhe na mesma
coluna.

## A malha

É o único grafismo do sistema, e carrega a ideia em vez de decorar.

A grade regular, com nó em cada cruzamento, é o estado declarado. Por cima, em
traço mais grosso e fora dos cruzamentos, correm caminhos e nós deslocados: o
observado. O desencontro entre as duas camadas é a textura.

Ela vive no fundo das faixas em cor cheia, sempre em `currentColor` para
atravessar os dois temas, sempre `aria-hidden`, nunca acima de conteúdo.

## Iconografia

Não existe. Nó, aresta e régua são o vocabulário gráfico inteiro, e vêm da
malha. Nenhum ícone decorativo acima de título.

## Código e terminal

Monoespaçada só em código de verdade, nunca como rótulo ou enfeite — é um dos
tiques mais reconhecíveis de página gerada. Sem janela falsa de terminal, sem
pontinhos coloridos de barra de título, sem cursor piscando.

## Motion

Um movimento só sem o usuário pedir: as linhas de uma lista entram escalonadas,
de baixo, com 50ms entre elas e 360ms de duração na curva `--ease-out`.
Escalonar faz a lista parecer que assenta; tudo aparecendo junto parece que
piscou.

Tudo o mais responde a ação. Botão e link afundam em `scale(0.97)` ao serem
pressionados, em 160ms. Hover só dentro de `@media (hover: hover)`, porque em
toque ele gruda depois do tap. Nada de revelar seção por seção ao rolar, que é
o default genérico.

`prefers-reduced-motion` tira o deslocamento e mantém a revelação por
opacidade. Menos e mais suave, não zero.

Esta seção descreve o que existe. Quando o movimento mudar, ela muda junto —
documentação que descreve comportamento inexistente é pior que documentação
faltando.

## Cor, e o que cada token quer dizer

`brand` é o vinho. Pinta o que é clicável ou ativo — link, anel de foco, item
atual do menu, marcação no diagrama — e tinge todos os neutros no matiz 354, o
vizinho dele. É por isso que o papel e o texto parecem pertencer ao mesmo lugar
mesmo onde não há vinho visível.

`band` é a superfície de faixa em cor cheia, com `band-ink` por cima. Existe
separado porque escurece nos dois temas. Nunca usar `brand` como fundo: ele
clareia no escuro, e a faixa vira rosa com texto quase preto.

`measure` é o acento secundário e só aparece onde há número medido. Um uso
visível no site inteiro. Se vazar para outro lugar, perde a força.

Os nomes anteriores eram `declared` e `observed`, herdados da gramática de
GitOps da direção A. Quando os rótulos da interface viraram português claro,
esses nomes passaram a descrever coisa diferente do que pintavam.

## Tipografia

Três famílias, com papéis que não se misturam.

**Zilla Slab** é a display. Slab mecânica, de lados retos, feita originalmente para documentação. Carrega o nome na abertura, o título de cada caso e o número medido.

**Archivo** é o corpo, carregada com eixo de peso de 350 a 600.

**Spline Sans Mono** só aparece em código de verdade. Monoespaçada como rótulo decorativo é um dos tiques mais reconhecíveis de página gerada e está proibida aqui.

A escolha das três foi deliberada contra o reflexo. IBM Plex, Inter, Space Grotesk e companhia são o que o modelo alcança primeiro, e usar isso produz monocultura entre projetos.

### Tamanho em rem, nunca em px

Toda a escala está em rem. Em px, quem aumenta o tamanho de fonte no navegador não recebe nada — e esse é um site que quer ser lido por qualquer um.

A escala é 3.5 / 2.5 / 2 / 1.25 / 1 / 0.75, com razão mínima de 1.25 entre degraus vizinhos. Havia um sexto degrau em 0.875 que foi removido: ele ficava a 1.14 do corpo, perto demais para criar hierarquia, e só embolava o pé da escala. Legenda de diagrama usa o corpo em cor apagada, que é o que ela é — prosa.

Texto corrido para em 68 caracteres.

### O tema escuro não é o claro invertido

Texto claro sobre fundo escuro lê mais leve do que o contrário. Por isso, no escuro, o texto corrido ganha entrelinha de 1.69 em vez de 1.625, e peso 350 em vez de 400. É pouco e se sente.

Nunca caixa alta em rótulo. Nunca uma palavra do título destacada em outra cor ou itálico.

## Espaçamento e raio

Escala de 4pt: 4, 8, 12, 16, 24, 32, 48, 64, 96. Dentro de um bloco, `space-1` a `space-4`. Entre blocos, `space-5` para cima. Entre casos, `space-7`. Entre seções, `space-8`.

Espaço entre irmãos sai de `gap`, nunca de `margin`. Margem colapsa e depois se conserta com hack.

Todo filho de flex que contém texto leva `min-width: 0`. Sem isso o item herda `min-width: auto`, se recusa a encolher abaixo do próprio conteúdo, e aí `text-overflow: ellipsis` e `overflow-wrap` viram decoração que nunca dispara. Foi exatamente o que aconteceu com a pílula: a reticência estava escrita e inerte.

Três raios e nenhum a mais. `radius-md` é o padrão.

## Interação e alvo de toque

Todo elemento clicável tem no mínimo 44px de alvo. O botão chega lá por `min-height`; o link, por recuo vertical que não engorda o texto.

Estados desenhados: repouso, hover, foco, pressionado e desabilitado. Hover vive dentro de `@media (hover: hover)` — em tela de toque ele gruda depois do tap e finge que algo está selecionado.

Foco é anel de 2px com 2px de deslocamento, em `:focus-visible`, para não aparecer no clique de mouse. Nunca remover o outline sem repor o anel.

## Iconografia

Ainda não existe. Quando existir: traço de 1.5px, grade de 24px, cantos em `radius-sm`, cor herdada do texto ao redor. Ícone marca ação ou estado, nunca enfeita título, nunca é emoji.

## Componentes

Cinco, e todos montam DOM puro. Nenhuma biblioteca carrega.

`Caso` é a unidade que o site repete. A ordem dos movimentos é fixa: problema, abordagem, resultado medido, o que faria diferente.

`Diagrama` é a moldura do desenho de arquitetura, para quando o trabalho é de empregador e não vira link.

`BlocoCodigo` é o único lugar onde a Spline Sans Mono aparece.

`EstadoPill` marca estado real e nunca ênfase.

`Contato` fecha a página. O endereço é texto selecionável, sempre.

Cada um tem guideline própria em `components/<Nome>/README.md`, e as props estão em `components/index.d.ts`.

## O que este sistema ainda não tem

Construído do zero, sem marca anterior, sem logotipo e sem site existente para extrair valor.

- Sem logotipo. A assinatura é o nome em `display`, como na capa. Marca gráfica, se houver, entra como arquivo e nunca aproximada.
- Sem assets. O `Diagrama` define como um desenho se parece, mas os desenhos em si ainda não existem como arquivo.
- Sem destaque de sintaxe no bloco de código. Seria a primeira biblioteca do sistema e ainda não se paga.
- Sem logotipo de verdade. A assinatura hoje é o nome em `display`, que é uma escolha legítima e não um rascunho.

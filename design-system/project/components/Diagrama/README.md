A moldura de um diagrama de arquitetura. O desenho é conteúdo e vem de fora; o sistema define a caixa, a legenda e as classes de traço que o SVG pode usar.

Existe porque metade do trabalho dele é de empregador e não vira link. Quando não há repositório nem site para mostrar, o diagrama é o artefato.

## Uma figura, uma afirmação

Decida o que o desenho prova antes de desenhar, e desenhe só isso. O primeiro diagrama que eu fiz aqui tentava contar entrega contínua e caminho de requisição no mesmo quadro, e virou um emaranhado que descia, voltava e descia de novo. Caminho de tráfego é outro desenho.

Mostre o mecanismo, não o nome dele. Uma caixa escrita "cache" diz menos que a frase; o laço que fecha entre duas caixas diz o que a frase não diz.

## Traço

Use as classes `jnx-dg-*`, nunca cor literal, senão o desenho não acompanha o tema. São cinco: caixa, caixa marcada, rótulo, nota e seta.

Uma caixa marcada por diagrama, e só uma. Se tudo é importante, nada é.

Toda seta tem rótulo. Seta sem rótulo quer dizer "tem alguma relação aqui", que não é informação. `aplica`, `publica imagem`, `reporta o estado real` são.

Ponta de seta é `marker` com `orient="auto-start-reverse"`, declarado uma vez no `defs`. Triângulo desenhado à mão aponta sempre para o mesmo lado e fica torto em seta vertical.

Rotas ortogonais, em grade. Linha na diagonal e caixa desalinhada leem como ruído mesmo quando a informação está certa.

Texto entre 11 e 13px no tamanho desenhado. Frase explicativa vai na legenda, não dentro do desenho.

## Anonimizar

Antes de desenhar, tire nome de cliente, nome de produto do provedor, hostname, número de conta e qualquer coisa que identifique ambiente. "Nuvem A" e "Nuvem B" comunicam a arquitetura igual.

## Legenda e acessibilidade

A legenda não descreve o desenho, diz o que o leitor deve concluir dele. Quem entendeu não precisa dela; quem não entendeu precisa da conclusão.

O SVG leva `role="img"`, um `aria-label` com a mesma afirmação da legenda, e `width` e `height` explícitos além do `viewBox`.

No celular o desenho rola na horizontal dentro da caixa, e não encolhe para caber. Encolher um desenho de 600px para a largura de um telefone transforma texto de 13px em 6px, que não é uma versão menor da informação, é a ausência dela. A página nunca alarga por causa do diagrama.

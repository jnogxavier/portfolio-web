Marca um estado real: projeto no ar, projeto fora do ar, disponível para conversar.

Nunca serve de ênfase. Uma pílula verde atrás de algo que você quer destacar é decoração usando a cor de estado, e aí a cor para de significar qualquer coisa no resto do site.

`estado` aceita exatamente `saudavel` ou `degradado`. Qualquer outro valor cai num terceiro estado, com a bolinha vazada e um aviso no console. Isso é de propósito: a versão anterior tratava valor desconhecido como saudável, então um erro de digitação como `degradada` pintava de verde um projeto fora do ar. Mostrar o estado errado é pior do que mostrar estado nenhum.

A cor nunca é a única informação: o texto diz o estado por extenso, para quem não distingue verde de vermelho e para leitor de tela, que recebe a pílula com `role="status"`.

Sem `texto` a pílula não é renderizada, e sai um aviso no console. Cor sozinha não é informação, então uma pílula só com bolinha não comunica nada a quem não distingue verde de vermelho.

O texto é curto e não quebra linha. "Fora do ar" basta; o motivo e a data vão na prosa ao lado, não dentro da pílula. Texto longo é cortado com reticências, porque pílula de duas linhas num raio de 999px vira losango.

Se o estado muda sozinho, quem consome atualiza o texto junto. Pílula verde em projeto caído é pior do que nenhuma pílula.

## Onde ela não vale

A pílula tem borda, fundo e raio. Isso é um cartão com outro nome, e o sistema
proíbe cartão. Ela se justifica apenas dentro de conteúdo, numa lista onde a
pessoa varre vários estados de relance e a caixa separa um do outro.

Em cromo de página — cabeçalho, rodapé, barra de navegação — ela não se
justifica, e o contêiner vira caixa dentro de caixa. Ali use só o ponto e o
texto, sem borda e sem fundo, assentados na linha de base do que está ao lado.

Foi exatamente esse o erro em 04/10/2026: a pílula entrou no cabeçalho ao lado
da placa do nome, duas caixas com raios diferentes encostadas, e leu como
cartão forçado.

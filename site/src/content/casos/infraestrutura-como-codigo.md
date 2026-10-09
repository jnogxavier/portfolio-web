---
titulo: Infraestrutura que só existia no console
meta: Infraestrutura como código
ordem: 4
par: infrastructure-as-code
restricao: >-
  O ambiente já estava no ar e funcionando, então passar para código não podia interromper o que existia.
decisao: >-
  Terraform em módulos, com um workspace por ambiente e as decisões registradas como ADR.
tradeoff: >-
  Toda mudança passou a custar um plan e um apply, em vez de um clique no console.
declarado: >-
  A infraestrutura está descrita em código, e qualquer ambiente pode ser reconstruído a partir do repositório.
observado: >-
  Rede, cluster e borda tinham sido criados à mão, pelo console. Funcionavam, e ninguém sabia reproduzi-los. As decisões que explicavam por que estavam daquele jeito viviam na memória de quem tinha clicado.
reconciliado: >-
  Terraform em módulos, com estado remoto e um workspace por ambiente. Um guard rail compara o workspace com o ambiente do arquivo de variáveis e faz o plan falhar antes de qualquer mudança, porque aplicar produção achando que é homologação é o erro que ninguém comete duas vezes. As decisões de arquitetura ficaram registradas como ADR, com o motivo e o que foi descartado.
chamada: >-
  Rede, cluster e borda existiam só no console. Viraram módulos de Terraform, com as decisões registradas.
ganhos:
  - >-
    A infraestrutura deixou de ser um objeto frágil. O pior caso passou a ser um apply, não uma arqueologia.
  - >-
    As decisões pararam de depender de memória. Os ADRs explicam por que cada parte é como é.
  - >-
    Ambiente virou workspace com estado próprio, então mexer em homologação deixou de ter qualquer caminho até produção.
aprendizado: >-
  Comecei pela nuvem onde estava o cluster, porque era onde estavam as partes móveis. Isso eu faria de novo. O que não terminou foi o resto: uma segunda nuvem ficou de fora e continua fora.
  E é aí que mora a lição. Infraestrutura como código só paga quando cobre tudo que importa. Enquanto metade do parque está versionada e a outra metade continua no console, o pior caso não foi eliminado, só mudou de endereço. Hoje eu dimensionaria o programa pelo tempo que de fato existia, em vez de tratar cobertura total como consequência natural de ter começado bem.
links: []
---

---
titulo: Infraestrutura que só existia no console
meta: DevOps Engineer na BCJ, 2026
ordem: 4
par: terraform-oci
diagrama: topologia
declarado: >-
  A infraestrutura está descrita em código, e qualquer ambiente pode ser
  reconstruído a partir do repositório.
observado: >-
  Rede, cluster e borda tinham sido criados à mão, pelo console. Funcionavam, e
  ninguém sabia reproduzi-los. As decisões que explicavam por que estavam
  daquele jeito viviam na memória de quem tinha clicado.
reconciliado: >-
  Nove módulos de Terraform cobrindo rede, roteamento, cluster gerenciado,
  borda e armazenamento, com estado em bucket e um workspace por ambiente.
  Entrou um guard rail que compara o workspace com o ambiente do arquivo de
  variáveis e faz o plan falhar antes de qualquer mudança, porque aplicar
  produção achando que é homologação é o erro que ninguém comete duas vezes.
  E sete decisões de arquitetura ficaram registradas como ADR, com o motivo e o
  que foi descartado.
resultado:
  antes: nada versionado
  valor: "9"
  unidade: módulos cobrindo rede, cluster e borda
chamada: >-
  Rede, cluster e borda existiam só no console. Viraram nove módulos de
  Terraform, com as decisões registradas.
ganhos:
  - >-
    A infraestrutura deixou de ser um objeto frágil. O pior caso passou a ser
    um apply, não uma arqueologia.
  - >-
    As decisões pararam de depender de memória. Sete ADRs explicam por que a
    borda é segregada, por que o roteamento é centralizado e por que o
    balanceador é provisionado pelo Kubernetes e não pelo Terraform.
  - >-
    Ambiente virou workspace com estado próprio, então mexer em homologação
    deixou de ter qualquer caminho até produção.
aprendizado: >-
  O programa era codificar o que já existia para não perder no pior caso, e eu
  comecei pela OCI porque era onde estava o Kubernetes. A AWS ficou de fora e
  continua fora. Se eu recomeçasse, teria codificado primeiro o que era mais
  difícil de reconstruir, não o que era mais confortável de escrever — e isso
  provavelmente apontava para a AWS, que já estava em produção havia mais
  tempo e tinha menos gente sabendo como tinha sido montada.
links: []
---

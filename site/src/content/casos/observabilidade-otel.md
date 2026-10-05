---
titulo: Provar a saída do fornecedor antes de pedir a migração
meta: DevOps Engineer na BCJ, 2026
ordem: 3
par: observability-otel
diagrama: correlacao
declarado: >-
  Quando um job falha ou demora, dá para abrir o log, achar o trace daquela
  execução e ver onde o tempo foi embora.
observado: >-
  Instrumentação presa ao agente do Elastic APM, que decidia para onde a
  telemetria podia ir. Os jobs não tinham instrumentação própria: dava para
  saber que algo falhou, não onde. E o log não conversava com o trace, então
  cada investigação começava do zero.
reconciliado: >-
  Montei uma prova de conceito a partir do backend real, com o SDK do
  OpenTelemetry inicializado no core antes de qualquer outra coisa e
  auto-instrumentação de HTTP, Express e Postgres. Cada job virou um span
  próprio, com contador de execução e de erro, medidor de jobs em curso e
  histograma de duração por status. O log passou a carregar traceId e spanId
  quando existe span ativo. A exportação é OTLP para o Collector, que decide o
  destino — Tempo, Prometheus, Loki — sem a aplicação saber qual é.
  Documentei a proposta, as decisões de implementação e o roteiro de adoção,
  incluindo o que faltaria para o TypeORM.
resultado:
  antes: zero instrumentação própria
  valor: "4"
  unidade: serviços instrumentados na prova de conceito, com log, métrica e trace correlacionados
chamada: >-
  Instrumentei quatro serviços com OpenTelemetry em prova de conceito, para
  mostrar com código rodando que dava para sair do agente proprietário.
ganhos:
  - >-
    A telemetria deixou de depender de um fornecedor. O Collector passou a
    decidir o destino, e trocar de backend virou configuração, não refatoração.
  - >-
    Investigação de job lento começou a ter ponto de partida: do log, pelo
    traceId, direto para o trace da execução.
  - >-
    A instrumentação ficou num só lugar, no core, em vez de espalhada por
    serviço — então ligar um serviço novo deixou de ser trabalho de instrumentar
    e virou trabalho de importar.
aprendizado: >-
  A prova de conceito funcionou e a migração não aconteceu: produção seguiu com
  o agente proprietário. Eu tratei o problema como técnico quando ele era de
  prioridade — código rodando não convence sozinho quem precisa aprovar parar
  outra coisa para adotar.
  Se eu recomeçasse, levaria antes o número que interessa a quem decide: quanto
  tempo se perde hoje numa investigação que começa do zero porque log e trace
  não se falam. Depois mostraria o código.
links: []
---

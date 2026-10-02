---
titulo: Telemetria fora do fornecedor, com OpenTelemetry
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
  SDK do OpenTelemetry inicializado no core, antes de qualquer outra coisa, com
  auto-instrumentação de HTTP, Express e Postgres. Cada job virou um span
  próprio, com contador de execução e de erro, medidor de jobs em curso e
  histograma de duração por status. O log passou a carregar traceId e spanId
  quando existe span ativo. A exportação é OTLP para o Collector, e dali a
  telemetria vai para onde a plataforma quiser — Tempo, Prometheus, Loki — sem
  tocar no código da aplicação.
resultado:
  antes: um agente proprietário
  valor: "4"
  unidade: serviços com log, métrica e trace correlacionados
chamada: >-
  Troquei o agente do Elastic APM por OpenTelemetry, para log, métrica e
  trace falarem da mesma execução.
ganhos:
  - >-
    A telemetria deixou de depender de um fornecedor. O Collector passou a
    decidir o destino, e trocar de backend virou configuração, não refatoração.
  - >-
    Investigação de job lento começou a ter ponto de partida: do log, pelo
    traceId, direto para o trace da execução.
  - >-
    Sumiu a instrumentação duplicada, que custava processamento e criava risco
    de build por referência residual ao agente antigo.
aprendizado: >-
  Parou como prova de conceito. Eu tinha instrumentação, métrica e correlação
  funcionando, e não levei até um alerta em produção — e alerta é o que
  transforma telemetria em operação. Hoje eu teria escolhido um sintoma só,
  como job que estoura o tempo esperado, e fechado o ciclo inteiro até alguém
  ser acordado por ele, antes de instrumentar o resto.
links: []
---

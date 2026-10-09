---
titulo: Telemetria que a plataforma controla
meta: Observabilidade
ordem: 3
par: observability-otel
diagrama: correlacao
restricao: >-
  A instrumentação dependia de um fornecedor, e o dado sensível não podia sair do ambiente.
decisao: >-
  OpenTelemetry com um Collector que decide o destino, no lugar de o agente do fornecedor decidir.
tradeoff: >-
  A telemetria passou a ser algo que a plataforma mantém, em vez de um serviço de fornecedor.
declarado: >-
  Quando um job falha ou demora, dá para abrir o log, achar o trace daquela execução e ver onde o tempo foi embora.
observado: >-
  A instrumentação estava presa ao agente de um fornecedor, que decidia para onde a telemetria podia ir. Os jobs não tinham instrumentação própria: dava para saber que algo falhou, não onde. E o log não conversava com o trace, então cada investigação começava do zero.
reconciliado: >-
  Coleta com OpenTelemetry no cluster, exportando por OTLP para um Collector, que decide o destino em vez de a aplicação decidir. Um coletor de logs no caminho remove campo sensível antes de o dado sair do ambiente. A métrica vai para o Prometheus e o painel para o Grafana, para a investigação começar de um lugar.
  Na aplicação, o SDK é inicializado no core antes de qualquer outra coisa, com auto-instrumentação de HTTP e de banco, cada job com span próprio, contador de execução e de erro, medidor de jobs em curso e histograma de duração por status, e o log carregando traceId e spanId quando há span ativo.
chamada: >-
  Coleta com OpenTelemetry, dado sensível filtrado antes de sair e log, métrica e trace ligados pelo mesmo identificador.
ganhos:
  - >-
    A telemetria deixou de depender de um fornecedor. O Collector passou a decidir o destino, e trocar de backend virou configuração, não refatoração.
  - >-
    Dado sensível para de sair do ambiente no caminho do log, e não depois, na tela de quem está investigando.
  - >-
    Investigação de job lento ganhou ponto de partida: do log, pelo traceId, direto para o trace da execução.
  - >-
    A instrumentação ficou num só lugar, no core, em vez de espalhada por serviço, então ligar um serviço novo deixou de ser trabalho de instrumentar e virou trabalho de importar.
  - >-
    Métrica de job deixou de ser “falhou ou não”: execução, erro, quantos estão em curso e quanto demora por status, que é o que permite notar degradação antes da reclamação.
aprendizado: >-
  A coleta funciona e os painéis são usados, mas boa parte disso eu montei direto no cluster, sem passar por repositório. Funciona e não sobrevive a mim: quem chegar depois não tem como reconstruir sem me perguntar. Hoje eu versionaria a stack de observabilidade junto com o resto, mesmo que custasse uma semana a mais para entregar o primeiro painel.
links: []
---

---
titulo: Telemetria que a plataforma controla
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
  Coleta com OpenTelemetry rodando no cluster, exportando por OTLP para o
  Collector, que decide o destino em vez de a aplicação decidir. Fluent Bit no
  caminho dos logs, removendo campo sensível antes de o dado sair do ambiente.
  Métrica recebida no Prometheus e painel no Grafana, para a investigação
  começar de um lugar em vez de começar do zero.
  Do lado da aplicação, instrumentei quatro serviços com o SDK inicializado no
  core antes de qualquer outra coisa, auto-instrumentação de HTTP, Express e
  Postgres, cada job com span próprio, contador de execução e de erro, medidor
  de jobs em curso e histograma de duração por status, e o log carregando
  traceId e spanId quando existe span ativo.
resultado:
  antes: um agente que decidia o destino
  valor: "4"
  unidade: serviços com log, métrica e trace correlacionados, e o destino na mão da plataforma
chamada: >-
  Montei a coleta no cluster com OpenTelemetry, com os dados sensíveis
  filtrados antes de sair, e transformei log e métrica em painel que alguém
  consulta durante um incidente.
ganhos:
  - >-
    A telemetria deixou de depender de um fornecedor. O Collector passou a
    decidir o destino, e trocar de backend virou configuração, não refatoração.
  - >-
    Dado sensível para de sair do ambiente no caminho do log, e não depois, na
    tela de quem está investigando.
  - >-
    Investigação de job lento ganhou ponto de partida: do log, pelo traceId,
    direto para o trace da execução.
  - >-
    A instrumentação ficou num só lugar, no core, em vez de espalhada por
    serviço — então ligar um serviço novo deixou de ser trabalho de
    instrumentar e virou trabalho de importar.
  - >-
    Métrica de job deixou de ser "falhou ou não": execução, erro, quantos
    estão em curso e quanto demora por status, que é o que permite notar
    degradação antes da reclamação.
aprendizado: >-
  A coleta funciona e os painéis são usados, mas boa parte disso eu montei
  direto no cluster, sem passar por repositório. Funciona e não sobrevive a
  mim: quem chegar depois não tem como reconstruir sem me perguntar.
  É exatamente a crítica que eu faço em outro caso deste site, e eu repeti o
  erro por pressa. Hoje eu versionaria a stack de observabilidade junto com o
  resto, mesmo que custasse uma semana a mais para entregar o primeiro painel.
links: []
---

---
titulo: Proving the way off a vendor before asking for the migration
meta: DevOps Engineer at BCJ, 2026
ordem: 3
par: observabilidade-otel
diagrama: correlacao
declarado: >-
  When a job fails or runs slow, you open the log, find the trace for that run,
  and see where the time went.
observado: >-
  Instrumentation tied to the Elastic APM agent, which decided where telemetry
  could go. The jobs had no instrumentation of their own: you could tell
  something had failed, not where. And logs did not talk to traces, so every
  investigation started from nothing.
reconciliado: >-
  I built a proof of concept from the real backend, with the OpenTelemetry SDK
  initialised in the core before anything else and auto-instrumentation for
  HTTP, Express and Postgres. Each job became its own span, with execution and
  error counters, a gauge of jobs in flight and a duration histogram by status.
  Logs started carrying traceId and spanId whenever a span is active. Export is
  OTLP to the Collector, which picks the destination — Tempo, Prometheus, Loki —
  without the application knowing which. I documented the proposal, the
  implementation decisions and the adoption roadmap, including what TypeORM
  would still need.
resultado:
  antes: no instrumentation of its own
  valor: "4"
  unidade: services instrumented in the proof of concept, with correlated logs, metrics and traces
chamada: >-
  I instrumented four services with OpenTelemetry as a proof of concept, to show
  with running code that leaving the proprietary agent was possible.
ganhos:
  - >-
    Telemetry stopped depending on a vendor. The Collector decides the
    destination, and swapping backends became configuration, not a refactor.
  - >-
    Investigating a slow job got a starting point: from the log, by traceId,
    straight to the trace for that run.
  - >-
    Instrumentation ended up in one place, the core, rather than spread across
    services — so wiring up a new service stopped being instrumentation work and
    became an import.
aprendizado: >-
  The proof of concept worked and the migration did not happen: production
  stayed on the proprietary agent. I treated the problem as technical when it
  was about priority — running code does not on its own convince the people who
  have to approve stopping something else to adopt it.
  If I started over, I would lead with the number that matters to whoever
  decides: how much time is lost today on an investigation that starts from
  scratch because logs and traces do not talk to each other. The code would come
  second.
links: []
---

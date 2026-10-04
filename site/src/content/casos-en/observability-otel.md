---
titulo: Telemetry off the vendor, with OpenTelemetry
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
  The OpenTelemetry SDK initialised in the core, before anything else, with
  auto-instrumentation for HTTP, Express and Postgres. Each job became its own
  span, with counters for runs and errors, a gauge for jobs in flight, and a
  duration histogram by status. Logs started carrying traceId and spanId
  whenever a span is active. Export goes over OTLP to the Collector, and from
  there telemetry goes wherever the platform wants — Tempo, Prometheus, Loki —
  without touching application code.
resultado:
  antes: one proprietary agent
  valor: "4"
  unidade: services with correlated logs, metrics and traces
chamada: >-
  I replaced the Elastic APM agent with OpenTelemetry and instrumented four
  services from scratch, so logs, metrics and traces talk about the same run.
ganhos:
  - >-
    Telemetry stopped depending on a vendor. The Collector decides the
    destination, and swapping backends became configuration, not a refactor.
  - >-
    Investigating a slow job got a starting point: from the log, by traceId,
    straight to the trace for that run.
  - >-
    Duplicate instrumentation went away, along with the overhead it cost and
    the build risk from leftover references to the old agent.
aprendizado: >-
  It stopped at proof of concept. I had instrumentation, metrics and
  correlation working, and I never took it through to an alert in production —
  and an alert is what turns telemetry into operations. Today I would pick one
  symptom, like a job running past its expected time, and close the whole loop
  until it wakes someone up, before instrumenting the rest.
links: []
---

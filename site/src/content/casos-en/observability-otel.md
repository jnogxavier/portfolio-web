---
titulo: Telemetry the platform controls
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
  OpenTelemetry collection running in the cluster, exporting over OTLP to the
  Collector, which picks the destination instead of the application picking it.
  Fluent Bit in the log path, stripping sensitive fields before the data leaves
  the environment. Metrics into Prometheus and a Grafana dashboard, so an
  investigation starts somewhere instead of starting from scratch.
  On the application side, I instrumented four services with the SDK
  initialised in the core before anything else, auto-instrumentation for HTTP,
  Express and Postgres, each job with its own span, execution and error
  counters, a gauge of jobs in flight and a duration histogram by status, and
  logs carrying traceId and spanId whenever a span is active.
resultado:
  antes: an agent that chose the destination
  valor: "4"
  unidade: services with correlated logs, metrics and traces, and the destination in the platform's hands
chamada: >-
  I built the collection in the cluster with OpenTelemetry, with sensitive
  fields stripped before anything leaves, and turned logs and metrics into a
  dashboard someone actually opens during an incident.
ganhos:
  - >-
    Telemetry stopped depending on a vendor. The Collector picks the
    destination, and swapping backends became configuration, not a refactor.
  - >-
    Sensitive data stops leaving the environment in the log path, rather than
    later, on the screen of whoever is investigating.
  - >-
    Investigating a slow job got a starting point: from the log, by traceId,
    straight to the trace for that run.
  - >-
    Instrumentation ended up in one place, the core, rather than spread across
    services — so wiring up a new service stopped being instrumentation work
    and became an import.
  - >-
    Job metrics stopped being "failed or not": executions, errors, how many are
    in flight and how long they take by status, which is what lets you notice
    degradation before the complaint.
aprendizado: >-
  The collection works and the dashboards get used, but a good part of it I set
  up straight in the cluster, without going through a repository. It works and
  it does not survive me: whoever comes next cannot rebuild it without asking.
  It is exactly the criticism I make in another case on this site, and I
  repeated the mistake out of haste. Today I would version the observability
  stack along with everything else, even if it cost another week before the
  first dashboard.
links: []
---

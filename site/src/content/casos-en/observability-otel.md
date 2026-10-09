---
titulo: Telemetry the platform controls
meta: Observability
ordem: 3
par: observabilidade-otel
diagrama: correlacao
restricao: >-
  Instrumentation depended on a vendor, and sensitive data could not leave the environment.
decisao: >-
  OpenTelemetry with a Collector that decides the destination, in place of the vendor agent deciding.
tradeoff: >-
  Telemetry became something the platform maintains, instead of a vendor service.
declarado: >-
  When a job fails or runs slow, you can open the log, find the trace of that run and see where the time went.
observado: >-
  Instrumentation was tied to a vendor's agent, which decided where telemetry could go. Jobs had no instrumentation of their own: you could tell that something failed, not where. And logs did not talk to traces, so every investigation started from scratch.
reconciliado: >-
  Collection with OpenTelemetry in the cluster, exporting over OTLP to a Collector, which decides the destination instead of the application deciding. A log collector on the log path removes sensitive fields before the data leaves the environment. Metrics go to Prometheus and dashboards to Grafana, so an investigation starts from one place.
  On the application side, the SDK is initialized in the core before anything else, with automatic instrumentation of HTTP and the database, a span for each job, execution and error counters, a gauge of jobs in flight and a duration histogram by status, and logs carrying traceId and spanId when a span is active.
chamada: >-
  From the log, the traceId leads straight to the execution's trace, and switching telemetry backends became configuration.
ganhos:
  - >-
    Telemetry stopped depending on a vendor. The Collector decides the destination, and changing backends became configuration, not refactoring.
  - >-
    Sensitive data stops leaving the environment on the log path, not later, on the screen of whoever is investigating.
  - >-
    Investigating a slow job gained a starting point: from the log, through the traceId, straight to the trace of that run.
  - >-
    Instrumentation lives in one place, in the core, instead of spread across services, so adding a new service stopped being instrumentation work and became import work.
  - >-
    Job metrics stopped being “failed or not”: executions, errors, how many are in flight and how long they take by status, which is what lets you notice degradation before the complaint.
aprendizado: >-
  The collection works and the dashboards get used, but a good part of it I set up directly in the cluster, without going through a repository. It works and does not outlive me: whoever comes next cannot rebuild it without asking me. Today I would version the observability stack together with everything else, even if it cost a week more to deliver the first dashboard.
links: []
---

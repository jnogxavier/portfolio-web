---
titulo: A shared delivery pipeline
meta: Continuous delivery
ordem: 1
par: esteira-compartilhada
diagrama: esteira
resultado:
  valor: 6 min
  unidade: build time per pipeline
  antes: 15 min
restricao: >-
  The pipelines were already in use and each service had its own details, so the new standard could not require every service to be identical.
decisao: >-
  Shared templates per pipeline type, with default variables for the most common values. Each project's pipeline only overrides what diverges from the default. The templates also reference condensed steps.
tradeoff: >-
  It required more detailed documentation and a skill to make it easier for others to create pipelines.
declarado: >-
  A small set of templates defines how every service is built, tested and shipped, and each service only declares what sets it apart.
observado: >-
  Each service carried its own pipeline, written and versioned next to the code. Over time they turned into near-identical files that drifted apart in small ways, with no caching and no owner. Standing up a new service meant copying another pipeline and tweaking it by hand.
reconciliado: >-
  Pipelines now come from shared templates, with multi-stage builds and caching.
  I also split the build agents into pools by kind of service, so one group's pipelines stop waiting on another's.
chamada: >-
  Near-identical pipelines copied from service to service became shared templates with caching and default variables, which each project overrides only where it differs.
ganhos:
  - >-
    Each pipeline started running in less time. Whoever opens a commit waits less to learn whether it passed, and the agent is free sooner for the next one.
  - >-
    Shipping a service got faster. A new service is born with its pipeline already in place, instead of copying another team's pipeline and tweaking it by hand.
  - >-
    With agents in separate pools, contention for agents eased, and one group's pipelines stopped blocking another's.
  - >-
    Improving the pipeline became a change to one template, instead of a change to many files.
aprendizado: >-
  I left the migration optional for too long. For weeks two standards ran at once, which is worse than either one alone. Today I would start with the noisiest services and migrate them without asking.
links: []
---

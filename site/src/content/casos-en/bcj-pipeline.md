---
titulo: Delivery pipeline in financial services
meta: DevOps Engineer at BCJ, February to July 2026
ordem: 1
par: bcj-esteira
diagrama: esteira
declarado: >-
  One pipeline per service, written and versioned next to each team's code.
observado: >-
  Dozens of near-identical files, none with caching, and no owner for any of
  them. Standing up a new service took a day.
reconciliado: >-
  Six shared templates in Azure DevOps, with multi-stage builds and caching. I
  gave up flexibility: anyone who needs something off the standard now opens a
  declared exception, and that shows up in the diff.
resultado:
  antes: 15 minutes
  valor: "6"
  unidade: minute builds
chamada: >-
  Dozens of near-identical pipelines became six shared templates, and build
  time dropped from 15 to 6 minutes.
ganhos:
  - >-
    Each pipeline started running in less time. The team waits less to learn
    whether a commit passed, and the agent is free sooner for the next one.
  - >-
    Shipping a service got faster. A new service is born with its pipeline
    already in place, instead of copying another team's pipeline and tweaking it
    by hand.
  - >-
    Agents moved into separate pools by kind of service: one dedicated to a
    single service, one for mobile and one for the rest. Contention for agents
    eased, and one group's pipelines stopped blocking another's.
  - >-
    Improving the pipeline became a change to one template, instead of a change
    to dozens of files.
aprendizado: >-
  I left the migration optional for too long. For weeks we ran two standards at
  once, which is worse than either one alone. Today I would start with the
  three noisiest services and migrate them without asking.
links: []
---

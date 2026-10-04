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
aprendizado: >-
  I left the migration optional for too long. For weeks we ran two standards at
  once, which is worse than either one alone. Today I would start with the
  three noisiest services and migrate them without asking.
links: []
---

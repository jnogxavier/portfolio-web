---
titulo: Esteira de entrega compartilhada
meta: Entrega contínua
ordem: 1
par: shared-pipelines
diagrama: esteira
resultado:
  valor: 6–8 min
  unidade: de build por pipeline
  antes: 15 min
restricao: >-
  Os pipelines já estavam em uso e cada serviço tinha detalhes próprios, então o padrão novo não podia exigir que todos fossem iguais.
decisao: >-
  Templates compartilhados por tipo de pipeline, com variáveis padrão para os valores mais usados. O pipeline de cada projeto só sobrescreve o que diverge do padrão. Os templates também referenciam steps condensados.
tradeoff: >-
  Exigiu documentação mais detalhada e a criação de uma skill para facilitar a criação de pipelines por outras pessoas.
declarado: >-
  Um conjunto pequeno de templates define como todo serviço é construído, testado e publicado, e cada serviço só declara o que o distingue.
observado: >-
  Cada serviço carregava o próprio pipeline, escrito e versionado junto do código. Com o tempo viraram arquivos quase iguais que divergiam em detalhes, sem cache e sem dono. Subir um serviço novo significava copiar o pipeline de outro e ajustar na mão.
reconciliado: >-
  Os pipelines passaram a vir de templates compartilhados, com build em estágios e cache.
  Os agentes de build também foram separados em pools por projeto, para que a esteira de um projeto não ficasse esperando a de outro.
chamada: >-
  Pipelines quase iguais, copiados de serviço em serviço, viraram templates compartilhados com cache e variáveis padrão, que cada projeto sobrescreve só no que diverge.
ganhos:
  - >-
    Cada pipeline passou a rodar em menos tempo. Quem abre um commit espera menos para saber se ele passou, e o agente fica livre mais cedo para o próximo.
  - >-
    Publicar um serviço ficou mais rápido. O serviço novo já nasce com a esteira pronta, em vez de copiar o pipeline de outro time e ajustar na mão.
  - >-
    Com os agentes em pools separados, a disputa por agente diminuiu, e a esteira de um projeto deixou de travar a de outro.
  - >-
    Melhorar a esteira virou uma mudança em um template, em vez de uma mudança em muitos arquivos.
aprendizado: >-
  Deixei a migração opcional tempo demais. Por semanas rodaram dois padrões ao mesmo tempo, o que é pior do que qualquer um dos dois sozinho. Hoje eu começaria pelos serviços mais barulhentos e migraria sem perguntar.
links: []
---

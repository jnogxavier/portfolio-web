---
titulo: Esteira de entrega em serviços financeiros
meta: DevOps Engineer na BCJ, fevereiro a julho de 2026
ordem: 1
par: bcj-pipeline
diagrama: esteira
declarado: >-
  Um pipeline por serviço, escrito e versionado junto do código de cada time.
observado: >-
  Dezenas de arquivos quase iguais, nenhum com cache, e ninguém dono de nenhum.
  Subir um serviço novo levava um dia.
reconciliado: >-
  Seis templates compartilhados no Azure DevOps, com build em estágios e cache.
  Perdi flexibilidade: quem precisa de algo fora do padrão abre exceção
  declarada, e isso aparece no diff.
resultado:
  antes: 15 minutos
  valor: "6"
  unidade: minutos de build
chamada: >-
  Dezenas de pipelines quase iguais viraram seis templates, e o build caiu
  de 15 para 6 minutos.
ganhos:
  - >-
    Cada pipeline passou a rodar em menos tempo. O time espera menos para saber
    se um commit passou, e o agente fica livre mais cedo para o próximo.
  - >-
    Publicar um serviço ficou mais rápido. O serviço novo já nasce com a esteira
    pronta, em vez de copiar o pipeline de outro time e ajustar na mão.
  - >-
    Os agentes passaram a ficar em pools separados por tipo de serviço: um
    dedicado a um dos serviços, outro ao mobile e outro aos demais. A disputa
    por agente diminuiu, e a esteira de um grupo deixou de travar a de outro.
  - >-
    Melhorar a esteira virou uma mudança em um template, em vez de uma mudança
    em dezenas de arquivos.
aprendizado: >-
  Deixei a migração opcional tempo demais. Fiquei com dois padrões rodando por
  semanas, o que é pior do que qualquer um dos dois sozinho. Hoje eu começaria
  pelos três serviços mais barulhentos e migraria sem perguntar.
links: []
---

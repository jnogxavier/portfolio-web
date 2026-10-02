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
aprendizado: >-
  Deixei a migração opcional tempo demais. Fiquei com dois padrões rodando por
  semanas, o que é pior do que qualquer um dos dois sozinho. Hoje eu começaria
  pelos três serviços mais barulhentos e migraria sem perguntar.
links: []
---

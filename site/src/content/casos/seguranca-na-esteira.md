---
titulo: Segurança na esteira sem travar o time
meta: Segurança na esteira
ordem: 2
par: pipeline-security
chamada: >-
  Análise estática, varredura de segredos e quality gate entraram na esteira sem parar nenhum time. Tudo começou só relatando, e só o segredo vazado bloqueava desde o primeiro dia.
restricao: >-
  Segurança na esteira é onde mais há conflito entre infraestrutura e quem desenvolve, e o trabalho dos times não podia parar.
decisao: >-
  Começar em modo relatório e bloquear só depois que o número de achados estabilizasse e o backlog estivesse triado. Aplicar a regra apenas no diff do merge request. Bloquear desde o primeiro dia uma coisa só, o segredo vazado.
tradeoff: >-
  Enquanto a análise só relatava, um achado novo não bloqueava o merge. Aceitei isso para ter um baseline real.
declarado: >-
  Todo merge passa por análise estática, varredura de segredos e quality gate, e quem escreve código só vê o que mudou no próprio diff.
observado: >-
  Não dava para ligar o bloqueio de uma vez. Ninguém sabia quantos achados existiam, quantos eram falsos positivos nem onde estava o legado.
reconciliado: >-
  Semgrep para análise estática, Gitleaks para segredos e SonarQube como quality gate, nos pipelines compartilhados. O relatório aparecia no próprio merge request e num canal dos times.
  Falso positivo eu triava por regra: se uma regra gerava muito falso positivo, o problema era a regra, e eu a ajustava ou desligava em vez de marcar a mesma exceção várias vezes. A exceção que sobrava de verdade ficava registrada num arquivo no próprio repositório, com o motivo escrito, em vez de só silenciada na ferramenta. Antes de mudar a esteira eu avisava os times.
ganhos:
  - >-
    O legado continuou visível sem travar ninguém, e um achado antigo só aparecia no diff de quem mexia naquele código.
  - >-
    Segredo nas variáveis de ambiente passou a ser barrado no merge.
  - >-
    Regra ruim virou ajuste de regra, e não uma pilha de exceções.
aprendizado: >-
  Liguei os scans todos ao mesmo tempo, e isso colocou coisa demais na frente dos times de uma vez. Hoje eu ligaria um de cada vez e passaria cada um para bloqueante aos poucos.
---

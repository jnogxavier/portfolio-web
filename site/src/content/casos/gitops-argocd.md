---
titulo: GitOps para dezenove serviços em quatro ambientes
meta: DevOps Engineer na BCJ, 2026
ordem: 2
par: gitops-argocd
diagrama: reconciliacao
declarado: >-
  O repositório descreve o que deve estar rodando em dev, homologação, beta e
  produção, e o cluster obedece ao repositório.
observado: >-
  Vários desenvolvedores mexendo no mesmo projeto com configurações divergentes
  entre si, e nada no cluster denunciando a divergência. Trocar uma variável
  exigia rodar a esteira inteira e subir a aplicação de novo.
reconciliado: >-
  Dezenove Applications no ArgoCD reconciliando o cluster contra o repositório.
  A configuração de cada serviço virou um hash sha256 numa anotação do template
  do pod, então mudar uma variável muda o template e dispara um rollout —
  sem passar por build. Com maxUnavailable em zero e readiness probe, nenhum
  pod antigo sai antes de um novo responder. E quando alguém edita o cluster
  por fora, a aplicação aparece OutOfSync em vez de virar surpresa semanas
  depois.
resultado:
  valor: "0"
  unidade: de indisponibilidade ao aplicar configuração
chamada: >-
  Trocar uma variável custava um deploy inteiro. Com GitOps virou um sync,
  sem derrubar nada.
ganhos:
  - >-
    O histórico do cluster virou o histórico do git. Quem mudou, quando, em qual
    commit, e com qual justificativa no pull request.
  - >-
    Voltar atrás virou um revert, em vez de alguém reconstruir de memória o que
    estava valendo antes.
  - >-
    Divergência parou de ser invisível. Quem edita o cluster por fora faz a
    aplicação aparecer OutOfSync, em vez de virar surpresa semanas depois.
  - >-
    Segredo saiu do repositório: o cluster passou a buscar credencial de um
    cofre externo, e o que está versionado é a referência, não o valor.
  - >-
    Configuração saiu do repositório da aplicação. Variável de ambiente, mesmo
    a que não é segredo, passou a viver no repositório de plataforma — então
    quem tem acesso ao código deixou de ter, por tabela, a configuração de
    produção.
  - >-
    Cada ambiente ficou isolado em três camadas: namespace próprio, cofre
    próprio e caminho próprio dentro dele. Homologação não alcança credencial
    de produção nem por engano de configuração.
  - >-
    O cluster passou a ser reconstruível a partir do repositório, porque o
    repositório deixou de ser documentação e virou a fonte.
aprendizado: >-
  Deixei o resync no padrão, que consulta o git a cada três minutos. Isso é
  tempo morto entre o merge e a mudança valendo, e nesse intervalo o cluster
  não é o que o repositório diz. Hoje eu configuraria o webhook do Azure DevOps
  para disparar o sync no commit, e reduziria o intervalo de consulta a
  fallback. É pouca configuração para uma janela que não precisava existir.
links: []
---

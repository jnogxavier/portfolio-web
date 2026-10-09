---
titulo: "GitOps: o cluster como reflexo do repositório"
meta: GitOps
ordem: 2
par: gitops-argocd
diagrama: reconciliacao
restricao: >-
  A configuração já divergia entre os desenvolvedores, e trocar uma variável não podia derrubar a aplicação.
decisao: >-
  O repositório como única fonte de verdade, com o ArgoCD reconciliando o cluster contra ele.
tradeoff: >-
  Editar o cluster direto deixou de ser um caminho legítimo: toda mudança passa pelo repositório.
declarado: >-
  O repositório descreve o que deve estar rodando em cada ambiente, e o cluster obedece ao repositório.
observado: >-
  Vários desenvolvedores mexendo no mesmo projeto com configurações que divergiam entre si, e nada no cluster denunciava a divergência. Trocar uma variável exigia rodar a esteira inteira e subir a aplicação de novo.
reconciliado: >-
  Uma Application do ArgoCD por serviço reconcilia o cluster contra o repositório. A configuração de cada serviço entra num hash em uma anotação do template do pod, então mudar uma variável muda o template e dispara um rollout, sem passar por build. Com maxUnavailable em zero e readiness probe, nenhum pod antigo sai antes de um novo responder. E quando alguém edita o cluster por fora, a aplicação aparece OutOfSync em vez de virar surpresa semanas depois.
chamada: >-
  Trocar uma variável virou um sync, sem derrubar nada, e o histórico do cluster virou o histórico do git, então dá para auditar quem mudou o quê, quando e por quê.
ganhos:
  - >-
    O histórico do cluster virou o histórico do git. Quem mudou, quando, em qual commit, e com qual justificativa no pull request.
  - >-
    Voltar atrás virou um revert, em vez de alguém reconstruir de memória o que estava valendo antes.
  - >-
    Divergência parou de ser invisível. Quem edita o cluster por fora faz a aplicação aparecer OutOfSync, em vez de virar surpresa semanas depois.
  - >-
    Segredo saiu do repositório: o cluster passou a buscar credencial de um cofre externo, e o que está versionado é a referência, não o valor.
  - >-
    Configuração saiu do repositório da aplicação. Variável de ambiente, mesmo a que não é segredo, passou a viver no repositório de plataforma, então quem tem acesso ao código deixou de ter, por tabela, a configuração de produção.
  - >-
    O cluster passou a ser reconstruível a partir do repositório, porque o repositório deixou de ser documentação e virou a fonte.
aprendizado: >-
  Deixei o resync no padrão, que consulta o git em intervalos. Isso é tempo morto entre o merge e a mudança valendo, e nesse intervalo o cluster não é o que o repositório diz. Hoje eu configuraria o webhook do provedor de git para disparar o sync no commit, e deixaria a consulta por intervalo como reserva. É pouca configuração para uma janela que não precisava existir.
links: []
---

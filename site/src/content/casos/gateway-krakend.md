---
titulo: Fechar as portas depois do ataque
meta: DevOps Engineer na BCJ, 2026
ordem: 6
par: api-gateway
diagrama: gateway
declarado: >-
  Nada alcança um serviço interno sem passar por uma camada que exige
  identidade, limita volume e decide o que entra.
observado: >-
  Tentativas de ataque chegando de várias origens ao mesmo tempo. Os serviços
  eram alcançáveis por caminhos que não o gateway, não havia teto de
  requisição, e o que existia de gateway era repasse: tudo que batia na borda
  seguia adiante.
reconciliado: >-
  A borda passou a filtrar tráfego por origem. E o gateway deixou de ser opção: endpoint que não estivesse
  declarado nele simplesmente parava de responder — o que fechou os caminhos
  alternativos de uma vez, ao custo de toda rota nova passar a exigir uma
  mudança no gateway.
  Atrás dele entrou validação de JWT em RS256 contra o Keycloak, com a chave
  pública buscada do próprio emissor e o issuer conferido; teto de requisição
  global e por cliente; circuit breaker; e limite de tamanho de corpo e de
  quantidade de cabeçalho.
resultado:
  antes: vários caminhos
  valor: "1"
  unidade: caminho até os serviços, e endpoint fora dele não responde
chamada: >-
  Ataques de várias origens ao mesmo tempo. A resposta foi fechar os caminhos
  alternativos: o gateway virou obrigatório, com identidade verificada e teto
  por cliente.
ganhos:
  - >-
    Identidade deixou de ser responsabilidade de cada serviço. O gateway valida
    o token antes de encaminhar, com algoritmo assimétrico e chave buscada do
    emissor — serviço nenhum precisa guardar segredo de assinatura.
  - >-
    O teto de requisição é em dois níveis: um global para a rota e outro por
    cliente. Um endereço sozinho não consome a capacidade da rota inteira.
  - >-
    Circuit breaker entre o gateway e os serviços, então falha de um backend
    não vira fila acumulando na borda.
  - >-
    Corpo limitado a um megabyte e cabeçalho limitado em quantidade e tamanho.
    Requisição absurda é recusada antes de custar processamento.
  - >-
    A esteira passou a varrer segredo, código, infraestrutura e imagem antes de
    publicar. O que não passa não chega na borda.
  - >-
    Tentativa de autenticação, bloqueio por limite e erro de autorização viram
    log auditável — então ataque deixou de ser invisível e virou coisa que se
    consulta.
aprendizado: >-
  Tudo isso foi reação. O gateway existia e estava configurado como repasse, e
  só virou fronteira depois que alguém tentou entrar. O que me incomoda não é o
  que fizemos, é a ordem: identidade e teto de requisição custam pouco antes do
  incidente e custam fim de semana depois.
  E uma parte do que foi feito nasceu no console, apertando botão sob pressão,
  em vez de nascer como código revisado. Funcionou, mas proteção que não está
  versionada é proteção que depende de memória — e memória é a primeira coisa
  que uma equipe perde quando alguém sai.
---

---
titulo: Onde estão os segredos, afinal
meta: DevOps Engineer na BCJ, 2026
ordem: 5
par: ecs-governance
diagrama: tresfontes
declarado: >-
  Para cada serviço é possível responder quais variáveis ele recebe, de onde
  cada valor vem e quem pode vê-lo.
observado: >-
  A configuração de um serviço estava espalhada por três lugares — variáveis na
  task definition do ECS, segredos no Secrets Manager e parâmetros no Parameter
  Store — e nenhum deles mostrava os outros dois. Responder "o que esse serviço
  recebe em produção" exigia abrir três consoles e juntar na cabeça.
reconciliado: >-
  Uma aplicação que lê os três de uma vez pela API da AWS e apresenta por
  cluster e por serviço, com mascaramento automático do que é sensível e filtro
  por tipo. Backend em NestJS com o SDK v3, frontend em React, e a leitura
  usando a role da própria instância em produção em vez de chave de acesso.
resultado:
  antes: três consoles
  valor: "1"
  unidade: tela para responder o que um serviço recebe
chamada: >-
  Variável, segredo e parâmetro viviam em três consoles que não se falavam.
  Construí a tela que junta os três.
ganhos:
  - >-
    Auditoria deixou de depender de alguém com acesso aos três consoles e
    paciência para cruzar à mão.
  - >-
    O mascaramento tornou possível olhar configuração de produção sem expor
    valor de segredo na tela de quem está investigando.
aprendizado: >-
  Construí a leitura antes da autenticação. Ficou uma ferramenta que enxerga
  configuração de toda uma conta AWS e, no estado em que parou, dependia de
  quem tivesse acesso à rede onde ela rodava — os guards estavam escritos e
  comentados, esperando o Keycloak. Era a ordem errada: ferramenta de
  governança sem controle de acesso é mais uma superfície a governar. Hoje eu
  começaria pelo login e pelos papéis, mesmo que o primeiro release mostrasse
  menos coisa.
links: []
---

---
titulo: Onde estão os segredos, afinal
meta: Configuração e segredos
ordem: 5
par: config-and-secrets
diagrama: tresfontes
restricao: >-
  A configuração vivia em três lugares com permissões separadas, e o valor de um segredo não podia aparecer na tela.
decisao: >-
  Uma visão única que lê os três pela API.
tradeoff: >-
  O mascaramento esconde o valor do segredo até de quem está investigando.
declarado: >-
  Para cada serviço é possível responder quais variáveis ele recebe, de onde cada valor vem e quem pode vê-lo.
observado: >-
  A configuração de um serviço estava espalhada por três lugares, variáveis na definição do serviço, segredos num gerenciador de segredos e parâmetros num armazém de parâmetros, e nenhum deles mostrava os outros dois. Responder “o que esse serviço recebe em produção” exigia abrir três consoles e juntar na cabeça.
reconciliado: >-
  Uma visão única que lê os três de uma vez pela API e apresenta por serviço, com mascaramento automático do que é sensível e filtro por tipo. A leitura usa a identidade da própria instância em vez de chave de acesso.
chamada: >-
  Dá para olhar a configuração de produção sem expor o valor de nenhum segredo, e a auditoria deixou de depender de três consoles.
ganhos:
  - >-
    Auditoria deixou de depender de alguém com acesso aos três consoles e paciência para cruzar à mão.
  - >-
    O mascaramento tornou possível olhar configuração de produção sem expor valor de segredo na tela de quem está investigando.
aprendizado: >-
  Se a leitura vem antes da autenticação, a ferramenta passa a enxergar a configuração de uma conta inteira protegida só pelo acesso à rede. É a ordem errada: ferramenta de governança sem controle de acesso é mais uma superfície a governar. Hoje eu começaria pelo login e pelos papéis, mesmo que o primeiro release mostrasse menos coisa.
links: []
---

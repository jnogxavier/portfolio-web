---
titulo: Where the secrets actually live
meta: Configuration and secrets
ordem: 6
par: configuracao-e-segredos
diagrama: tresfontes
restricao: >-
  Configuration lived in three places with separate permissions, and a secret's value could not appear on screen.
decisao: >-
  A single view that reads all three through the API.
tradeoff: >-
  Masking hides the secret's value even from whoever is investigating.
declarado: >-
  For each service you can answer which variables it receives, where each value comes from and who can see it.
observado: >-
  A service's configuration was spread across three places, variables in the service definition, secrets in a secrets manager and parameters in a parameter store, and none of them showed the other two. Answering “what does this service receive in production” meant opening three consoles and putting it together in your head.
reconciliado: >-
  A single view that reads all three at once through the API and presents them by service, with automatic masking of what is sensitive and a filter by type. The read uses the instance's own identity instead of an access key.
chamada: >-
  Production configuration can be inspected without exposing any secret's value, and auditing no longer depends on three consoles.
ganhos:
  - >-
    Auditing stopped depending on someone with access to three consoles and the patience to cross-check by hand.
  - >-
    Masking made it possible to look at production configuration without exposing a secret value on the screen of whoever is investigating.
aprendizado: >-
  A governance tool is one more surface to govern. Today I would start with login and roles, even if the first release showed less.
links: []
---

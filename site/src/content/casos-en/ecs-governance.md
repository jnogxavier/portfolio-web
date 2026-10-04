---
titulo: Where the secrets actually live
meta: DevOps Engineer at BCJ, 2026
ordem: 5
par: governanca-ecs
diagrama: tresfontes
declarado: >-
  For any service you can answer which variables it receives, where each value
  comes from, and who is allowed to see it.
observado: >-
  A service's configuration was spread across three places — variables in the
  ECS task definition, secrets in Secrets Manager, parameters in Parameter
  Store — and none of them showed the other two. Answering "what does this
  service get in production" meant opening three consoles and stitching it
  together in your head.
reconciliado: >-
  An application that reads all three through the AWS API and presents them by
  cluster and by service, masking anything sensitive and filtering by type.
  NestJS on the back end with the v3 SDK, React on the front, and reads using
  the instance role in production rather than an access key.
resultado:
  antes: three consoles
  valor: "1"
  unidade: screen to answer what a service receives
chamada: >-
  Variables, secrets and parameters lived in three consoles that did not talk
  to each other. I built the screen that joins them and masks what is sensitive.
ganhos:
  - >-
    Auditing stopped requiring someone with access to all three consoles and
    the patience to cross-reference by hand.
  - >-
    Masking made it possible to look at production configuration without
    exposing a secret's value to whoever is investigating.
aprendizado: >-
  I built the reading before the authentication. What came out was a tool that
  can see configuration across an entire AWS account and, in the state it
  stopped in, depended on whoever could reach the network it ran on — the
  guards were written and commented out, waiting for Keycloak. That was the
  wrong order: a governance tool without access control is one more surface to
  govern. Today I would start with login and roles, even if the first release
  showed less.
links: []
---

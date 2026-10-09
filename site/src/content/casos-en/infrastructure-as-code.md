---
titulo: Infrastructure that only existed in the console
meta: Infrastructure as code
ordem: 4
par: infraestrutura-como-codigo
restricao: >-
  The environment was already up and working, so moving it to code could not interrupt what existed.
decisao: >-
  Terraform in modules, one workspace per environment, and the decisions recorded as ADRs.
tradeoff: >-
  Every change now costs a plan and an apply, instead of a click in the console.
declarado: >-
  Infrastructure is described in code, and any environment can be rebuilt from the repository.
observado: >-
  Network, cluster and edge had been created by hand, through the console. They worked, and nobody knew how to reproduce them. The decisions that explained why they looked that way lived in the memory of whoever had clicked.
reconciliado: >-
  Terraform in modules, with remote state and one workspace per environment. A guard rail compares the workspace with the environment in the variables file and makes the plan fail before any change, because applying production thinking it is staging is the mistake nobody makes twice. Architecture decisions were recorded as ADRs, with the reason and what was discarded.
chamada: >-
  The worst case became an apply, not an archaeology dig.
ganhos:
  - >-
    Infrastructure stopped being a fragile object. The worst case became an apply, not an archaeology dig.
  - >-
    Decisions stopped depending on memory. The ADRs explain why each part is the way it is.
  - >-
    Environment became a workspace with its own state, so touching staging no longer has any path to production.
aprendizado: >-
  I started with the cloud where the cluster lived, because that is where the moving parts were. I would do that again. What did not get finished was the rest: a second cloud stayed out and still is.
  And that is where the lesson lives. Infrastructure as code only pays when it covers everything that matters. While half of the estate is versioned and the other half stays in the console, the worst case has not been eliminated, only moved. Today I would size the program by the time that actually existed, instead of treating full coverage as a natural consequence of having started well.
links: []
---

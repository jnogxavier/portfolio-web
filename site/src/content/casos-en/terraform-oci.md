---
titulo: Infrastructure that only existed in the console
meta: DevOps Engineer at BCJ, 2026
ordem: 4
par: terraform-oci
diagrama: topologia
declarado: >-
  The infrastructure is described in code, and any environment can be rebuilt
  from the repository.
observado: >-
  Network, cluster and edge had been created by hand, through the console. They
  worked, and nobody knew how to reproduce them. The decisions explaining why
  they were that way lived in the memory of whoever had done the clicking.
reconciliado: >-
  Nine Terraform modules covering network, routing, managed cluster, edge and
  storage, with state in a bucket and one workspace per environment. A guard
  rail compares the workspace against the environment in the variables file and
  fails the plan before any change, because applying to production while
  thinking you are in staging is the mistake nobody makes twice. And seven
  architecture decisions were recorded as ADRs, with the reasoning and what was
  rejected.
resultado:
  antes: nothing versioned
  valor: "9"
  unidade: modules covering network, cluster and edge
chamada: >-
  Network, cluster and edge only existed in the console. They became nine
  Terraform modules, with the decisions written down.
ganhos:
  - >-
    The infrastructure stopped being a fragile object. The worst case became an
    apply, not an archaeology dig.
  - >-
    Decisions stopped depending on memory. Seven ADRs explain why the edge is
    segregated, why routing is centralised, and why the load balancer is
    provisioned by Kubernetes rather than Terraform.
  - >-
    Each environment became a workspace with its own state, so touching staging
    no longer has any path to production.
aprendizado: >-
  I started with OCI because that was where the cluster lived, and that is where
  the moving parts were. I would do that again. What did not finish was the
  rest: AWS stayed out, and it is still out.
  That is where the lesson is. Infrastructure as code only pays off once it
  covers everything that matters. While half the estate is versioned and the
  other half is still in a console, the worst case has not been removed — it has
  only changed address.
  Today I would size the programme against the time that actually existed,
  rather than treating full coverage as the natural consequence of a good start.
links: []
---

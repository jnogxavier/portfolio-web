---
titulo: GitOps for nineteen services across four environments
meta: DevOps Engineer at BCJ, 2026
ordem: 2
par: gitops-argocd
diagrama: reconciliacao
declarado: >-
  The repository describes what should be running in dev, staging, beta and
  production, and the cluster follows the repository.
observado: >-
  Several developers working on the same project with configuration that had
  drifted apart, and nothing in the cluster flagging it. Changing a variable
  meant running the whole pipeline and shipping the application again.
reconciliado: >-
  Nineteen ArgoCD Applications reconciling the cluster against the repository.
  Each service's configuration became a sha256 hash in a pod template
  annotation, so changing a variable changes the template and triggers a
  rollout — without going through a build. With maxUnavailable at zero and a
  readiness probe, no old pod leaves before a new one answers. And when someone
  edits the cluster by hand, the application shows up OutOfSync instead of
  becoming a surprise weeks later.
resultado:
  valor: "0"
  unidade: downtime when applying configuration
chamada: >-
  Changing a variable used to cost a full deploy. With GitOps it became a sync,
  applied without taking anything down.
ganhos:
  - >-
    The cluster's history became the git history. Who changed what, when, in
    which commit, and with what reasoning in the pull request.
  - >-
    Rolling back became a revert, instead of someone rebuilding from memory
    what used to be in place.
  - >-
    Drift stopped being invisible. Editing the cluster directly makes the
    application show up OutOfSync.
  - >-
    Secrets left the repository: the cluster pulls credentials from an external
    store, and what is versioned is the reference, not the value.
  - >-
    The cluster became rebuildable from the repository, because the repository
    stopped being documentation and became the source.
aprendizado: >-
  I left the resync on its default, which polls git every three minutes. That
  is dead time between the merge and the change taking effect, and during it
  the cluster is not what the repository says. Today I would wire the Azure
  DevOps webhook to trigger the sync on commit, and keep polling as a fallback.
links: []
---

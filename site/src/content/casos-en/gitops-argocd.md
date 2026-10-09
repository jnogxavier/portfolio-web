---
titulo: "GitOps: the cluster as a reflection of the repository"
meta: GitOps
ordem: 2
par: gitops-argocd
diagrama: reconciliacao
restricao: >-
  Configuration had already drifted between developers, and changing a variable could not take the application down.
decisao: >-
  The repository as the single source of truth, with ArgoCD reconciling the cluster against it.
tradeoff: >-
  Editing the cluster directly stopped being a legitimate path: every change goes through the repository.
declarado: >-
  The repository describes what should be running in each environment, and the cluster obeys the repository.
observado: >-
  Several developers working on the same project with configurations that drifted apart, and nothing in the cluster flagging the drift. Changing a variable meant running the whole pipeline and shipping the application again.
reconciliado: >-
  One ArgoCD Application per service reconciles the cluster against the repository. Each service's configuration goes into a hash on an annotation of the pod template, so changing a variable changes the template and triggers a rollout, without going through a build. With maxUnavailable at zero and a readiness probe, no old pod leaves before a new one answers. And when someone edits the cluster directly, the application shows up OutOfSync instead of turning into a surprise weeks later.
chamada: >-
  Changing a variable used to cost a whole deploy. With GitOps it became a sync, with nothing taken down.
ganhos:
  - >-
    The cluster's history became the git history. Who changed what, when, in which commit, and with what reasoning in the pull request.
  - >-
    Rolling back became a revert, instead of someone rebuilding from memory what used to be in place.
  - >-
    Drift stopped being invisible. Editing the cluster directly makes the application show up OutOfSync.
  - >-
    Secrets left the repository: the cluster pulls credentials from an external store, and what is versioned is the reference, not the value.
  - >-
    Configuration left the application repository. Environment variables, even the ones that are not secrets, moved to the platform repository, so having the code no longer means having production configuration by default.
  - >-
    The cluster became rebuildable from the repository, because the repository stopped being documentation and became the source.
aprendizado: >-
  I left the resync at its default, which polls git at an interval. That is dead time between the merge and the change taking effect, and in that gap the cluster is not what the repository says. Today I would configure the git provider's webhook to trigger the sync on commit, and keep polling as a fallback. It is little configuration for a window that did not need to exist.
links: []
---

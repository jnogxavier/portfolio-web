---
titulo: Pipeline security without blocking the team
meta: Pipeline security
ordem: 2
par: seguranca-na-esteira
chamada: >-
  Static analysis, secret scanning and a quality gate went into the pipeline without stopping any team. Everything started as report-only, and only a leaked secret blocked from day one.
restricao: >-
  Security in the pipeline is where infrastructure and developers clash the most, and the teams' work could not stop.
decisao: >-
  Start in report-only mode and block only after the number of findings settled and the backlog was triaged. Apply the rules only to the merge request diff. Block one thing from day one, a leaked secret.
tradeoff: >-
  While the analysis only reported, a new finding did not block the merge. I accepted that to get a real baseline.
declarado: >-
  Every merge goes through static analysis, secret scanning and a quality gate, and developers only see what changed in their own diff.
observado: >-
  Switching blocking on all at once was not an option. Nobody knew how many findings existed, how many were false positives, or where the legacy code was.
reconciliado: >-
  Semgrep for static analysis, Gitleaks for secrets and SonarQube as the quality gate, in the shared pipelines. The report showed up in the merge request itself and in a channel for the teams.
  I triaged false positives by rule: if a rule produced a lot of false positives, the rule was the problem, and I tuned it or switched it off instead of marking the same exception again and again. Any real exception that remained was recorded in a file in the repository itself, with the reason written down, instead of just being silenced in the tool. Before changing the pipeline I told the teams.
ganhos:
  - >-
    The legacy stayed visible without blocking anyone, and an old finding only showed up in the diff of whoever touched that code.
  - >-
    A secret in the environment variables started being stopped at the merge.
  - >-
    A bad rule became a rule adjustment, not a pile of exceptions.
aprendizado: >-
  I turned all the scans on at once, and that put too much in front of the teams at the same time. Today I would turn them on one at a time and move each one to blocking gradually.
---

---
titulo: Closing the doors after the attack
meta: DevOps Engineer at BCJ, 2026
ordem: 6
par: gateway-krakend
diagrama: gateway
declarado: >-
  Nothing reaches an internal service without passing through a layer that
  demands identity, caps volume and decides what gets in.
observado: >-
  Attack attempts arriving from several origins at once. Services were
  reachable by paths other than the gateway, there was no request ceiling, and
  what existed of a gateway was a pass-through: everything that hit the edge
  went straight on.
reconciliado: >-
  The edge started filtering traffic by origin. And the gateway stopped being optional: an endpoint not declared in it
  simply stopped answering — which closed the alternative paths at once, at the
  cost of every new route now requiring a gateway change.
  Behind it came JWT validation in RS256 against Keycloak, with the public key
  fetched from the issuer itself and the issuer verified; a request ceiling
  both global and per client; a circuit breaker; and limits on body size and on
  header count.
resultado:
  antes: several paths
  valor: "1"
  unidade: path to the services, and an endpoint outside it does not answer
chamada: >-
  Attacks from several origins at once. The answer was to close the alternative
  paths: the gateway became mandatory, with verified identity and a per-client
  ceiling.
ganhos:
  - >-
    Identity stopped being each service's problem. The gateway validates the
    token before forwarding, with an asymmetric algorithm and the key fetched
    from the issuer — no service has to hold a signing secret.
  - >-
    The request ceiling has two levels: a global one for the route and another
    per client. A single address cannot consume the whole route's capacity.
  - >-
    A circuit breaker between the gateway and the services, so one failing
    backend does not turn into a queue piling up at the edge.
  - >-
    Bodies capped at one megabyte and headers capped in count and size. An
    absurd request is refused before it costs any processing.
  - >-
    The pipeline started scanning secrets, code, infrastructure and images
    before publishing. What does not pass never reaches the edge.
  - >-
    Authentication attempts, rate limit blocks and authorisation errors became
    auditable logs — so an attack stopped being invisible and became something
    you can look up.
aprendizado: >-
  All of this was a reaction. The gateway already existed and was configured as
  a pass-through, and it only became a boundary after someone tried to get in.
  What bothers me is not what we did, it is the order: identity and rate
  limiting cost little before an incident and cost a weekend afterwards.
  And part of what we did was born in a console, clicking buttons under
  pressure, rather than as reviewed code. It worked, but protection that is not
  versioned is protection that depends on memory — and memory is the first
  thing a team loses when someone leaves.
---

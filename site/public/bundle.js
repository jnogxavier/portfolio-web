/* @ds-bundle: {"format":4,"namespace":"Jnx","components":[{"name":"Caso"},{"name":"Diagrama"},{"name":"BlocoCodigo"},{"name":"EstadoPill"},{"name":"Contato"}]} */
(function () {
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function listaDeLinks(links, cls) {
    var nav = el('nav', cls);
    links.forEach(function (l) {
      var a = el('a', 'jnx-link', l.texto);
      a.href = l.href;
      nav.appendChild(a);
    });
    return nav;
  }

  // Um caso: a unidade que o site repete. A ordem dos movimentos e fixa e e o que
  // separa portfolio de curriculo — o resultado medido so aparece depois do problema.
  function Caso(p) {
    p = p || {};
    var root = el('article', 'jnx-caso');

    if (p.titulo || p.meta) {
      var cabeca = el('div', 'jnx-caso__cabeca');
      if (p.titulo) cabeca.appendChild(el('h2', 'jnx-caso__titulo', p.titulo));
      if (p.meta) cabeca.appendChild(el('p', 'jnx-caso__meta', p.meta));
      root.appendChild(cabeca);
    }

    function movimento(rotulo, texto) {
      if (!texto) return;
      var bloco = el('div', 'jnx-caso__movimento');
      bloco.appendChild(el('h3', 'jnx-caso__rotulo', rotulo));
      bloco.appendChild(el('p', 'jnx-caso__texto', texto));
      root.appendChild(bloco);
    }

    movimento('O problema', p.problema);
    movimento('A abordagem', p.abordagem);

    if (p.resultado && p.resultado.valor) {
      var r = el('div', 'jnx-caso__resultado');
      r.appendChild(el('span', 'jnx-caso__medida', p.resultado.valor));
      if (p.resultado.unidade) r.appendChild(el('span', 'jnx-caso__unidade', p.resultado.unidade));
      root.appendChild(r);
    }

    movimento('O que eu faria diferente', p.aprendizado);

    if (p.links && p.links.length) root.appendChild(listaDeLinks(p.links, 'jnx-caso__links'));
    return root;
  }

  // Codigo de verdade, e so isso. Rotulo da linguagem fica em meta, nunca em mono.
  function BlocoCodigo(p) {
    p = p || {};
    var root = el('figure', 'jnx-codigo');
    if (p.linguagem) root.appendChild(el('figcaption', 'jnx-codigo__rotulo', p.linguagem));
    var pre = el('pre', 'jnx-codigo__pre');
    pre.appendChild(el('code', null, p.codigo || ''));
    root.appendChild(pre);
    return root;
  }

  // Estado real, nunca enfase. "saudavel" ou "degradado".
  function EstadoPill(p) {
    p = p || {};
    var estado = p.estado;
    if (estado !== 'saudavel' && estado !== 'degradado') {
      if (window.console && console.warn) console.warn('EstadoPill: estado desconhecido ' + JSON.stringify(estado) + '. Use "saudavel" ou "degradado".');
      estado = 'desconhecido';
    }
    if (!p.texto) {
      if (window.console && console.warn) console.warn('EstadoPill: sem texto. A cor nunca é a única informação; a pílula não é renderizada.');
      return document.createDocumentFragment();
    }
    var root = el('span', 'jnx-pill jnx-pill--' + estado);
    root.appendChild(el('span', 'jnx-pill__ponto'));
    root.appendChild(el('span', 'jnx-pill__texto', p.texto || ''));
    root.setAttribute('role', 'status');
    return root;
  }


  // Como um diagrama se parece aqui. O desenho em si e conteudo e vem de fora;
  // o sistema define a moldura, a legenda e as cores que o traco pode usar.
  function Diagrama(p) {
    p = p || {};
    var root = el('figure', 'jnx-diagrama');
    var caixa = el('div', 'jnx-diagrama__caixa');
    if (p.conteudo) caixa.appendChild(p.conteudo);
    root.appendChild(caixa);
    if (p.legenda) root.appendChild(el('figcaption', 'jnx-diagrama__legenda', p.legenda));
    return root;
  }

  // Contato. O endereco e texto selecionavel, sempre. mailto e conveniencia que
  // pode nao funcionar, entao nunca e o unico caminho.
  function Contato(p) {
    p = p || {};
    var root = el('section', 'jnx-contato');
    if (p.estado) root.appendChild(EstadoPill(p.estado));

    var linha = el('div', 'jnx-contato__linha');
    var end = el('span', 'jnx-contato__email', p.email || '');
    linha.appendChild(end);

    var botao = el('button', 'jnx-botao', 'Copiar');
    botao.type = 'button';
    botao.addEventListener('click', function () {
      function ok() { botao.textContent = 'Copiado'; aviso.textContent = 'Endereço copiado.'; setTimeout(function () { botao.textContent = 'Copiar'; aviso.textContent = ''; }, 2000); }
      function selecionar() {
        var r = document.createRange(); r.selectNodeContents(end);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        botao.textContent = 'Selecionado';
        aviso.textContent = 'Endereço selecionado. Use a cópia do seu teclado.';
        setTimeout(function () { botao.textContent = 'Copiar'; aviso.textContent = ''; }, 2000);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(p.email || '').then(ok, selecionar);
      } else { selecionar(); }
    });
    linha.appendChild(botao);

    var aviso = el('span', 'jnx-sr');
    aviso.setAttribute('role', 'status');
    linha.appendChild(aviso);
    root.appendChild(linha);

    if (p.links && p.links.length) root.appendChild(listaDeLinks(p.links, 'jnx-contato__links'));
    return root;
  }

  window.Jnx = { Caso: Caso, Diagrama: Diagrama, BlocoCodigo: BlocoCodigo, EstadoPill: EstadoPill, Contato: Contato };
})();

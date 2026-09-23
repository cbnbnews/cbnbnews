/* ==========================================================================
   CBNB NEWS — LAYOUT COMPARTILHADO
   Colégio Batista Nova Betânia
   --------------------------------------------------------------------------
   Este arquivo monta as partes que se repetem em TODAS as páginas do site:

     • a tarja da edição (no topo)
     • o cabeçalho com o logotipo, o menu e a busca
     • a capa de cada página interna (faixa verde com o título)
     • o rodapé
     • as janelas de notícia, de foto e de pesquisa

   Assim, quando algo do menu ou do rodapé precisar mudar, basta mudar AQUI,
   uma única vez, e todas as páginas mudam junto.

   ⚠️ Para mudar os TEXTOS das notícias, agenda, galeria etc., edite o arquivo
      "conteudo.js" — não é preciso mexer neste.
   ========================================================================== */

/* --------------------------------------------------------------------------
   O MENU DO SITE
   Para acrescentar uma página nova no menu, copie uma linha e troque o nome e
   o arquivo. O campo "id" precisa ser igual ao data-pagina do <body> da página.
   -------------------------------------------------------------------------- */
const MENU = [
  { id: "inicio",      nome: "Início",             arquivo: "index.html" },
  { id: "noticias",    nome: "Notícias",           arquivo: "noticias.html" },
  { id: "escola",      nome: "Escola",             arquivo: "escola.html" },
  { id: "eventos",     nome: "Eventos",            arquivo: "eventos.html" },
  { id: "entrevistas", nome: "Entrevistas",        arquivo: "entrevistas.html" },
  { id: "equipe",      nome: "Equipe",             arquivo: "equipe.html" },
  { id: "galeria",     nome: "Galeria",            arquivo: "galeria.html" },
  { id: "sobre",       nome: "Sobre",              arquivo: "sobre.html" },
  { id: "creditos",    nome: "Créditos",           arquivo: "creditos.html" }
];

/* Monta todo o layout. É a primeira coisa que o site faz ao abrir. */
function montarLayout() {
  const corpo = document.body;
  const paginaAtual = corpo.dataset.pagina || "inicio";

  /* ---------- Links do menu ---------- */
  const itensMenu = MENU.map(
    (m) =>
      '<li><a href="' + m.arquivo + '"' + (m.id === paginaAtual ? ' class="ativo" aria-current="page"' : "") + ">" +
      m.nome + "</a></li>"
  ).join("");

  /* ---------- Botão da plataforma ----------
     Enquanto PLATAFORMA.url estiver com "#", o botão não é exibido. */
  const temPlataforma = typeof PLATAFORMA !== "undefined" && PLATAFORMA.url && PLATAFORMA.url !== "#";
  const botaoPlataforma = temPlataforma
    ? '<a class="btn-plataforma" href="' + PLATAFORMA.url + '"' +
        (PLATAFORMA.abrirEmNovaAba ? ' target="_blank" rel="noopener"' : "") +
        ' title="' + PLATAFORMA.descricao + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
          '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3"/></svg>' +
        "<span>" + PLATAFORMA.nome + "</span>" +
      "</a>"
    : "";

  /* ---------- Tarja da edição + cabeçalho ---------- */
  const topo =
    '<div class="tarja-edicao">' +
      '<div class="container">' +
        '<span class="edicao-num"><i class="ponto"></i><span id="tarja-edicao-numero">' +
          EDICAO.numero.toUpperCase() + "</span></span>" +
        '<span class="produzido" id="tarja-produzido">' + EDICAO.chamadaTopo + "</span>" +
        '<span class="data-topo">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13">' +
            '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>' +
          '<span id="tarja-data">' + EDICAO.data + "</span>" +
        "</span>" +
      "</div>" +
    "</div>" +

    '<header class="cabecalho" id="cabecalho">' +
      '<div class="container">' +
        '<a href="index.html" class="logo" aria-label="CBNB News — página inicial">' +
          '<img src="img/cbnb.jpg" alt="Logotipo do Colégio Batista Nova Betânia">' +
          '<span class="logo-texto">' +
            '<span class="nome">CBNB <em>NEWS</em></span>' +
            '<span class="escola">' + EDICAO.escola + "</span>" +
          "</span>" +
        "</a>" +

        '<nav class="nav" id="nav" aria-label="Menu principal"><ul>' + itensMenu + "</ul></nav>" +

        '<div class="acoes-topo">' +
          botaoPlataforma +
          '<button class="btn-icone" id="abrir-busca" aria-label="Pesquisar no site" title="Pesquisar">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">' +
              '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
          "</button>" +
          '<button class="btn-icone btn-menu" id="btn-menu" aria-label="Abrir menu" aria-expanded="false">' +
            '<span class="barras"><span></span><span></span><span></span></span>' +
          "</button>" +
        "</div>" +
      "</div>" +
    "</header>" +

    '<div class="fundo-menu" id="fundo-menu"></div>' +

    /* ---------- Janela de pesquisa ---------- */
    '<div class="busca" id="busca" role="dialog" aria-label="Pesquisar" aria-modal="true">' +
      '<div class="busca-caixa">' +
        '<div class="busca-campo">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">' +
            '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
          '<input type="search" id="campo-busca" placeholder="Pesquisar notícias, entrevistas, eventos..." autocomplete="off">' +
          '<button class="busca-fechar" id="fechar-busca">ESC</button>' +
        "</div>" +
        '<div class="busca-resultados" id="busca-resultados"></div>' +
        '<div class="busca-dica">Dica: pesquise por palavra-chave, categoria ou parte do título.</div>' +
      "</div>" +
    "</div>";

  /* ---------- Capa das páginas internas ----------
     A página inicial tem o banner próprio, então não recebe capa.
     As demais mostram uma faixa verde com o título vindo do <body>. */
  let capa = "";
  if (paginaAtual !== "inicio" && corpo.dataset.titulo) {
    capa =
      '<section class="capa-pagina">' +
        '<div class="container">' +
          '<nav class="caminho" aria-label="Você está em">' +
            '<a href="index.html">Início</a><span>›</span><span>' + corpo.dataset.titulo + "</span>" +
          "</nav>" +
          (corpo.dataset.olho ? '<span class="olho-capa">' + corpo.dataset.olho + "</span>" : "") +
          "<h1>" + corpo.dataset.titulo + "</h1>" +
          (corpo.dataset.subtitulo ? "<p>" + corpo.dataset.subtitulo + "</p>" : "") +
        "</div>" +
      "</section>";
  }

  /* ---------- Rodapé ---------- */
  const linksRodape = MENU.map((m) => '<li><a href="' + m.arquivo + '">' + m.nome + "</a></li>").join("");

  const rodape =
    '<footer class="rodape">' +
      '<div class="container">' +
        '<div class="rodape-grade">' +

          '<div class="rodape-marca">' +
            '<div class="logo">' +
              '<img src="img/cbnb.jpg" alt="Logotipo do Colégio Batista Nova Betânia">' +
              '<span class="logo-texto">' +
                '<span class="nome">CBNB <em>NEWS</em></span>' +
                '<span class="escola">' + EDICAO.escola + "</span>" +
              "</span>" +
            "</div>" +
            '<p class="frase-jornal">“Jornal escolar produzido pelos estudantes do ' + EDICAO.escola + '.”</p>' +
            "<p>" + EDICAO.linhaFina + "</p>" +
          "</div>" +

          '<div class="rodape-links"><h4>Navegação</h4><ul>' + linksRodape + "</ul></div>" +

          '<div class="rodape-links"><h4>Seções</h4><ul>' +
            '<li><a href="index.html#destaques">Destaques da Semana</a></li>' +
            '<li><a href="index.html#destaque-edicao">Destaque da Edição</a></li>' +
            '<li><a href="equipe.html#feito-por-nos">Feito por Nós</a></li>' +
            '<li><a href="entrevistas.html#voz-da-equipe">Voz da Equipe</a></li>' +
            '<li><a href="equipe.html#opiniao">A Voz do CBNB</a></li>' +
            '<li><a href="noticias.html#curiosidades">Você Sabia?</a></li>' +
            (temPlataforma
              ? '<li><a href="' + PLATAFORMA.url + '"' +
                  (PLATAFORMA.abrirEmNovaAba ? ' target="_blank" rel="noopener"' : "") + ">" +
                  PLATAFORMA.nome + "</a></li>"
              : "") +
          "</ul></div>" +

          '<div class="rodape-edicao"><h4>Esta edição</h4>' +
            '<div class="caixa">' +
              '<div class="linha"><span>Edição</span><strong>' + EDICAO.numero.replace(/^Edição de\s*/i, "") + "</strong></div>" +
              '<div class="linha"><span>Publicação</span><strong>' + EDICAO.data + "</strong></div>" +
              '<div class="linha"><span>Ano</span><strong>' + EDICAO.ano + "</strong></div>" +
              '<div class="linha"><span>Produção</span><strong>Equipe do CBNB News</strong></div>' +
            "</div>" +
          "</div>" +

        "</div>" +

        '<div class="rodape-base">' +
          "<span>© " + EDICAO.ano + " CBNB NEWS — " + EDICAO.escola + ". Todos os direitos reservados.</span>" +
          "<span>Conteúdo de demonstração, produzido para o jornal escolar.</span>" +
        "</div>" +
      "</div>" +
    "</footer>" +

    '<button class="topo-btn" id="topo-btn" aria-label="Voltar ao topo">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">' +
        '<path d="M12 19V5M6 11l6-6 6 6"/></svg>' +
    "</button>" +

    /* ---------- Janela da notícia completa ---------- */
    '<div class="modal" id="modal-noticia" role="dialog" aria-modal="true" aria-label="Notícia completa">' +
      '<article class="modal-caixa">' +
        '<button class="modal-fechar" id="modal-fechar" aria-label="Fechar notícia">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">' +
            '<path d="M18 6 6 18M6 6l12 12"/></svg>' +
        "</button>" +
        '<div id="modal-conteudo"></div>' +
      "</article>" +
    "</div>" +

    /* ---------- Visualizador de fotos da galeria ---------- */
    '<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada">' +
      '<button class="lb-btn lb-fechar" id="lb-fechar" aria-label="Fechar">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">' +
          '<path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
      '<button class="lb-btn lb-ant" id="lb-ant" aria-label="Foto anterior">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">' +
          '<path d="M15 18l-6-6 6-6"/></svg></button>' +
      '<button class="lb-btn lb-prox" id="lb-prox" aria-label="Próxima foto">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">' +
          '<path d="M9 6l6 6-6 6"/></svg></button>' +
      "<figure>" +
        '<img id="lb-img" alt="">' +
        "<figcaption><strong id=\"lb-titulo\"></strong><span id=\"lb-legenda\"></span></figcaption>" +
      "</figure>" +
    "</div>";

  /* ---------- Coloca tudo na página ---------- */
  const alvoTopo = document.getElementById("topo-do-site");
  const alvoRodape = document.getElementById("rodape-do-site");
  if (alvoTopo) alvoTopo.innerHTML = topo + capa;
  if (alvoRodape) alvoRodape.innerHTML = rodape;

  /* Título da aba do navegador */
  const nomePagina = (MENU.find((m) => m.id === paginaAtual) || {}).nome;
  document.title =
    (paginaAtual === "inicio" ? "" : nomePagina + " · ") + EDICAO.nome + " — " + EDICAO.escola;
}

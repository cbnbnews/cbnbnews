/* ==========================================================================
   CBNB NEWS — SCRIPT PRINCIPAL
   Colégio Batista Nova Betânia
   --------------------------------------------------------------------------
   Este arquivo monta a página usando o conteúdo do arquivo "conteudo.js"
   e faz funcionar: menu, busca, filtros, janelas de notícia e galeria.

   ⚠️ Para mudar TEXTOS do site, edite "conteudo.js" — não é preciso mexer aqui.

   ÍNDICE
   01. Atalhos e ferramentas
   02. Ícones
   03. Preenchimento dos dados da edição
   04. Cartões de notícia
   05. Destaques da Semana
   06. Destaque da Edição (e cartão do banner)
   07. Notícias + filtros + "carregar mais"
   08. Escola
   09. Agenda CBNB
   10. Entrevista da Edição
   11. Voz da Equipe
   12. Feito por Nós
   13. Galeria + filtros + visualizador
   14. A Voz do CBNB (opinião)
   15. Você Sabia?
   16. Sobre o CBNB News
   17. Janela da notícia completa
   18. Busca
   19. Menu, rolagem e animações
   20. Inicialização
   ========================================================================== */

(function () {
  "use strict";

  /* ========================================================================
     01. ATALHOS E FERRAMENTAS
     ======================================================================== */

  /** Busca um elemento na página. */
  const $  = (seletor) => document.querySelector(seletor);
  /** Busca vários elementos na página. */
  const $$ = (seletor) => Array.prototype.slice.call(document.querySelectorAll(seletor));

  /** Insere HTML dentro de um elemento, se ele existir. */
  function preencher(seletor, html) {
    const el = $(seletor);
    if (el) el.innerHTML = html;
  }

  /** Escreve um texto simples dentro de um elemento, se ele existir. */
  function escrever(seletor, texto) {
    const el = $(seletor);
    if (el) el.textContent = texto;
  }

  /** Devolve o nome de uma categoria a partir do id (ex.: "esportes" → "Esportes"). */
  function nomeCategoria(id) {
    const cat = CATEGORIAS.find((c) => c.id === id);
    return cat ? cat.nome : "Geral";
  }

  /** Devolve o ícone de uma categoria. */
  function iconeCategoria(id) {
    const cat = CATEGORIAS.find((c) => c.id === id);
    return cat ? cat.icone : "📰";
  }

  /** Protege textos que vão para dentro do HTML. */
  function limpar(texto) {
    return String(texto === undefined || texto === null ? "" : texto)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ========================================================================
     02. ÍCONES (desenhos em SVG usados nos cartões)
     ======================================================================== */
  const ICONES = {
    calendario:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    pessoa:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/></svg>',
    seta:
      '<svg class="seta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" width="15" height="15"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    lupa:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" width="16" height="16"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'
  };

  /* ========================================================================
     03. DADOS DA EDIÇÃO (tarja, banner e rodapé)
     ======================================================================== */
  function montarEdicao() {
    document.title = EDICAO.nome + " — Jornal do " + EDICAO.escola;

    escrever("#tarja-edicao-numero", EDICAO.numero.toUpperCase());
    escrever("#tarja-produzido", EDICAO.chamadaTopo);
    escrever("#tarja-data", EDICAO.data);

    escrever("#hero-edicao", EDICAO.numero);
    escrever("#hero-slogan", EDICAO.slogan);
    escrever("#hero-linha-fina", "“" + EDICAO.linhaFina + "”");
    escrever("#hero-data", EDICAO.data);
    escrever("#hero-editorias", CATEGORIAS.length + " editorias");

    escrever("#rodape-edicao-num", EDICAO.numero.replace(/^Edição de\s*/i, ""));
    escrever("#rodape-data", EDICAO.data);
    escrever("#rodape-ano", EDICAO.ano);
    escrever("#rodape-ano-copy", EDICAO.ano);
  }

  /* ========================================================================
     04. CARTÃO DE NOTÍCIA (modelo reaproveitado em várias seções)
     ======================================================================== */
  function cartaoNoticia(noticia, atraso) {
    return (
      '<article class="cartao revelar" data-categoria="' + limpar(noticia.categoria) + '"' +
        (atraso ? ' data-atraso="' + atraso + '"' : "") + '>' +
        '<div class="moldura">' +
          '<span class="etiqueta etiqueta--flutuante">' + iconeCategoria(noticia.categoria) + " " + limpar(nomeCategoria(noticia.categoria)) + '</span>' +
          '<img src="' + limpar(noticia.imagem) + '" alt="Foto: ' + limpar(noticia.titulo) + '" loading="lazy">' +
        '</div>' +
        '<div class="cartao-corpo">' +
          '<div class="meta">' +
            '<span>' + ICONES.calendario + limpar(noticia.data) + '</span>' +
          '</div>' +
          '<h3>' + limpar(noticia.titulo) + '</h3>' +
          '<p class="resumo">' + limpar(noticia.resumo) + '</p>' +
          '<div class="cartao-rodape">' +
            '<span class="meta"><span>' + ICONES.pessoa + limpar(noticia.autoria || "Redação CBNB News") + '</span></span>' +
            '<button class="leia-mais" data-noticia="' + limpar(noticia.id) + '">Leia mais ' + ICONES.seta + '</button>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  /* ========================================================================
     04b. PALAVRA DA SEMANA (versículo em destaque)
     ======================================================================== */
  function montarPalavraSemana() {
    if (typeof PALAVRA_SEMANA === "undefined") return;
    const pv = PALAVRA_SEMANA;

    preencher(
      "#palavra-semana",
      '<div class="palavra-caixa revelar">' +
        '<div class="palavra-marca">' +
          '<span class="palavra-ico">📖</span>' +
          '<span class="palavra-rotulo">Palavra da Semana</span>' +
          (pv.tema ? '<span class="palavra-tema">' + limpar(pv.tema) + "</span>" : "") +
        "</div>" +
        '<blockquote class="palavra-versiculo">' +
          "<p>“" + limpar(pv.versiculo) + "”</p>" +
          "<cite>" + limpar(pv.referencia) + "</cite>" +
        "</blockquote>" +
        (pv.reflexao ? '<p class="palavra-reflexao">' + limpar(pv.reflexao) + "</p>" : "") +
      "</div>"
    );
  }

  /* ========================================================================
     05. DESTAQUES DA SEMANA
     ======================================================================== */
  function montarDestaques() {
    // Usa as notícias marcadas com destaqueSemana: true (ou as 4 primeiras).
    let lista = NOTICIAS.filter((n) => n.destaqueSemana);
    if (lista.length === 0) lista = NOTICIAS.slice(0, 4);

    preencher(
      "#destaques-grade",
      lista.slice(0, 4).map((n, i) => cartaoNoticia(n, (i % 4) + 1)).join("")
    );
  }

  /* ========================================================================
     06. DESTAQUE DA EDIÇÃO (seção grande + cartão do banner)
     ======================================================================== */
  function montarDestaqueEdicao() {
    const d = DESTAQUE_EDICAO;

    // --- Seção grande ---
    preencher(
      "#destaque-grade",
      '<figure class="destaque-img">' +
        '<img src="' + limpar(d.imagem) + '" alt="Foto: ' + limpar(d.titulo) + '">' +
        '<figcaption class="legenda-img">' + limpar(d.legenda) + '</figcaption>' +
      '</figure>' +
      '<div class="destaque-conteudo">' +
        '<span class="etiqueta etiqueta--solida">' + iconeCategoria(d.categoria) + " " + limpar(nomeCategoria(d.categoria)) + '</span>' +
        '<h3>' + limpar(d.titulo) + '</h3>' +
        '<p class="chamada">' + limpar(d.resumo) + '</p>' +
        '<div class="meta">' +
          '<span>' + ICONES.calendario + limpar(d.data) + '</span>' +
          '<span>' + ICONES.pessoa + limpar(d.autoria) + '</span>' +
        '</div>' +
        '<button class="btn btn--principal" data-noticia="destaque-edicao">Ler a matéria completa ' + ICONES.seta + '</button>' +
      '</div>'
    );

    // --- Cartão menor, dentro do banner principal ---
    preencher(
      "#hero-cartao",
      '<div class="moldura">' +
        '<img src="' + limpar(d.imagem) + '" alt="Foto da matéria de capa">' +
      '</div>' +
      '<div class="hero-cartao-info">' +
        '<span class="etiqueta">Matéria de capa</span>' +
        '<h3>' + limpar(d.titulo) + '</h3>' +
        '<p>' + limpar(d.data) + " · " + limpar(d.autoria) + '</p>' +
      '</div>'
    );
  }

  /* ========================================================================
     07. NOTÍCIAS — filtros e "carregar mais"
     ======================================================================== */
  const POR_PAGINA = 6;          // quantas notícias aparecem por vez
  let categoriaAtiva = "todas";  // filtro selecionado
  let visiveis = POR_PAGINA;     // quantas já estão na tela

  function montarFiltrosNoticias() {
    let html =
      '<button class="filtro ativo" data-filtro="todas">📋 Todas</button>';

    CATEGORIAS.forEach((c) => {
      // Só mostra a categoria se existir alguma notícia nela.
      if (NOTICIAS.some((n) => n.categoria === c.id)) {
        html += '<button class="filtro" data-filtro="' + c.id + '">' + c.icone + " " + limpar(c.nome) + "</button>";
      }
    });

    preencher("#filtros-noticias", html);

    $$("#filtros-noticias .filtro").forEach((botao) => {
      botao.addEventListener("click", function () {
        $$("#filtros-noticias .filtro").forEach((b) => b.classList.remove("ativo"));
        this.classList.add("ativo");
        categoriaAtiva = this.dataset.filtro;
        visiveis = POR_PAGINA;
        montarNoticias();
      });
    });
  }

  function noticiasFiltradas() {
    return categoriaAtiva === "todas"
      ? NOTICIAS
      : NOTICIAS.filter((n) => n.categoria === categoriaAtiva);
  }

  function montarNoticias() {
    const lista = noticiasFiltradas();
    const grade = $("#noticias-grade");
    if (!grade) return;

    if (lista.length === 0) {
      grade.innerHTML =
        '<div class="sem-resultado"><span class="emoji">🔍</span>' +
        "<p>Nenhuma notícia nesta categoria por enquanto.</p></div>";
    } else {
      grade.innerHTML = lista
        .slice(0, visiveis)
        .map((n, i) => cartaoNoticia(n, (i % 3) + 1))
        .join("");
    }

    // Mostra ou esconde o botão "carregar mais".
    const botao = $("#btn-carregar-mais");
    if (botao) botao.parentElement.style.display = visiveis < lista.length ? "flex" : "none";

    ativarRevelacao();
  }

  function ligarCarregarMais() {
    const botao = $("#btn-carregar-mais");
    if (!botao) return;
    botao.addEventListener("click", function () {
      visiveis += POR_PAGINA;
      montarNoticias();
    });
  }

  /* ========================================================================
     08. ESCOLA
     ======================================================================== */
  function montarEscola() {
    if (typeof ESCOLA === "undefined") return;

    escrever("#escola-titulo", ESCOLA.titulo);
    escrever("#escola-chamada", ESCOLA.chamada);

    preencher(
      "#escola-texto",
      ESCOLA.paragrafos.map((p) => "<p>" + limpar(p) + "</p>").join("")
    );

    preencher(
      "#escola-destaques",
      ESCOLA.destaques
        .map(
          (d, i) =>
            '<div class="curiosidade revelar" data-atraso="' + ((i % 4) + 1) + '">' +
              '<div class="ico">' + d.icone + "</div>" +
              '<h3 style="font-size:1rem;margin-bottom:6px;">' + limpar(d.titulo) + "</h3>" +
              "<p>" + limpar(d.texto) + "</p>" +
            "</div>"
        )
        .join("")
    );
  }

  /* ========================================================================
     09. AGENDA CBNB
     ======================================================================== */
  /** Nome bonito para cada tipo de evento da agenda. */
  const TIPOS_EVENTO = {
    publicacao: "Publicação",
    cultural: "Cultural",
    esportivo: "Esportivo",
    projeto: "Projeto",
    entrevista: "Entrevista",
    especial: "Especial"
  };

  function montarAgenda() {
    preencher(
      "#agenda-lista",
      AGENDA.map(
        (ev, i) =>
          '<article class="agenda-item revelar" data-atraso="' + ((i % 4) + 1) + '">' +
            '<div class="agenda-data">' +
              '<span class="dia">' + limpar(ev.dia) + "</span>" +
              '<span class="mes">' + limpar(ev.mes) + "</span>" +
              '<span class="ano">' + limpar(ev.ano) + "</span>" +
            "</div>" +
            '<div class="agenda-texto">' +
              "<h3>" + limpar(ev.titulo) + "</h3>" +
              "<p>" + limpar(ev.descricao) + "</p>" +
            "</div>" +
            '<span class="etiqueta agenda-tipo tipo-' + limpar(ev.tipo) + '">' + limpar(TIPOS_EVENTO[ev.tipo] || ev.tipo) + "</span>" +
          "</article>"
      ).join("")
    );
  }

  /* Versão curta da agenda, usada na página inicial (só os próximos eventos). */
  function montarAgendaResumo() {
    preencher(
      "#agenda-resumo",
      AGENDA.slice(0, 3)
        .map(
          (ev, i) =>
            '<article class="agenda-item revelar" data-atraso="' + (i + 1) + '">' +
              '<div class="agenda-data">' +
                '<span class="dia">' + limpar(ev.dia) + "</span>" +
                '<span class="mes">' + limpar(ev.mes) + "</span>" +
                '<span class="ano">' + limpar(ev.ano) + "</span>" +
              "</div>" +
              '<div class="agenda-texto"><h3>' + limpar(ev.titulo) + "</h3>" +
                "<p>" + limpar(ev.descricao) + "</p></div>" +
              '<span class="etiqueta agenda-tipo tipo-' + limpar(ev.tipo) + '">' +
                limpar(TIPOS_EVENTO[ev.tipo] || ev.tipo) + "</span>" +
            "</article>"
        )
        .join("")
    );
  }

  /* ========================================================================
     10. ENTREVISTA DA EDIÇÃO
     ======================================================================== */
  function montarEntrevista() {
    const e = ENTREVISTA;

    // Sem foto cadastrada, o card mostra um selo de aspas no lugar da imagem.
    const topoCard = e.imagem
      ? '<div class="moldura"><img src="' + limpar(e.imagem) + '" alt="' + limpar(e.nome || e.cargo) + '"></div>'
      : '<div class="moldura moldura--aspas"><span>”</span></div>';

    preencher(
      "#entrevistado",
      topoCard +
      '<div class="entrevistado-info">' +
        (e.nome ? "<h3>" + limpar(e.nome) + "</h3>" : "") +
        '<p class="cargo">' + limpar(e.cargo) + "</p>" +
        '<p class="tempo">' + limpar(e.tempoCasa) + "</p>" +
        '<p class="aspas">' + limpar(e.chamada) + "</p>" +
      "</div>"
    );

    preencher(
      "#entrevista-qa",
      e.perguntas
        .map(
          (item, i) =>
            '<article class="qa-item revelar" data-atraso="' + ((i % 4) + 1) + '">' +
              '<h3 class="pergunta"><span class="marca">' + (i + 1) + "</span>" + limpar(item.p) + "</h3>" +
              '<p class="resposta">' + limpar(item.r) + "</p>" +
            "</article>"
        )
        .join("")
    );
  }

  /* ========================================================================
     11. VOZ DA EQUIPE (depoimentos)
     ======================================================================== */
  function montarDepoimentos() {
    preencher(
      "#depoimentos-grade",
      DEPOIMENTOS.map(
        (d, i) =>
          '<article class="depoimento revelar" data-atraso="' + ((i % 3) + 1) + '">' +
            '<span class="aspa-deco">“</span>' +
            "<p>" + limpar(d.texto) + "</p>" +
            '<div class="assina">' +
              '<span class="avatar">🎓</span>' +
              "<span>" +
                '<span class="nome">Equipe de ' + limpar(d.funcao) + "</span><br>" +
                '<span class="papel">CBNB News</span>' +
              "</span>" +
            "</div>" +
          "</article>"
      ).join("")
    );
  }

  /* ========================================================================
     12. FEITO POR NÓS (funções da equipe)
     ======================================================================== */
  function montarFuncoes() {
    preencher(
      "#funcoes-grade",
      FUNCOES.map(
        (f, i) =>
          '<article class="funcao revelar" data-atraso="' + ((i % 4) + 1) + '">' +
            '<div class="ico">' + f.icone + "</div>" +
            "<h3>" + limpar(f.nome) + "</h3>" +
            "<p>" + limpar(f.descricao) + "</p>" +
          "</article>"
      ).join("")
    );
  }

  /* ========================================================================
     13. GALERIA
     ======================================================================== */
  let galeriaAtiva = "todos";     // filtro atual da galeria
  let fotosVisiveis = [];         // fotos que estão na tela (usado no visualizador)
  let fotoAtual = 0;

  function montarFiltrosGaleria() {
    preencher(
      "#filtros-galeria",
      GALERIA_FILTROS.map(
        (f, i) =>
          '<button class="filtro' + (i === 0 ? " ativo" : "") + '" data-filtro="' + f.id + '">' + limpar(f.nome) + "</button>"
      ).join("")
    );

    $$("#filtros-galeria .filtro").forEach((botao) => {
      botao.addEventListener("click", function () {
        $$("#filtros-galeria .filtro").forEach((b) => b.classList.remove("ativo"));
        this.classList.add("ativo");
        galeriaAtiva = this.dataset.filtro;
        montarGaleria();
      });
    });
  }

  function montarGaleria() {
    fotosVisiveis =
      galeriaAtiva === "todos" ? GALERIA.slice() : GALERIA.filter((f) => f.categoria === galeriaAtiva);

    const grade = $("#galeria-grade");
    if (!grade) return;

    if (fotosVisiveis.length === 0) {
      grade.innerHTML =
        '<div class="sem-resultado"><span class="emoji">📷</span><p>Ainda não há fotos nesta categoria.</p></div>';
      return;
    }

    grade.innerHTML = fotosVisiveis
      .map(
        (f, i) =>
          '<figure class="foto revelar" data-indice="' + i + '" data-atraso="' + ((i % 4) + 1) + '" tabindex="0">' +
            '<img src="' + limpar(f.imagem) + '" alt="' + limpar(f.titulo) + '" loading="lazy">' +
            '<figcaption class="foto-info">' +
              '<span class="lupa">' + ICONES.lupa + "</span>" +
              "<h4>" + limpar(f.titulo) + "</h4>" +
              "<p>" + limpar(f.legenda) + "</p>" +
            "</figcaption>" +
          "</figure>"
      )
      .join("");

    // Clique (e tecla Enter) abre o visualizador de fotos.
    $$("#galeria-grade .foto").forEach((foto) => {
      foto.addEventListener("click", () => abrirLightbox(Number(foto.dataset.indice)));
      foto.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          abrirLightbox(Number(foto.dataset.indice));
        }
      });
    });

    ativarRevelacao();
  }

  /* Amostra da galeria, usada na página da escola.
     Aqui as fotos levam para a página da galeria, em vez de abrir o visualizador. */
  function montarGaleriaResumo() {
    preencher(
      "#galeria-resumo",
      GALERIA.slice(0, 6)
        .map(
          (f, i) =>
            '<a href="galeria.html" class="foto revelar" data-atraso="' + ((i % 4) + 1) + '">' +
              '<img src="' + limpar(f.imagem) + '" alt="' + limpar(f.titulo) + '" loading="lazy">' +
              '<span class="foto-info">' +
                "<h4>" + limpar(f.titulo) + "</h4>" +
                "<p>" + limpar(f.legenda) + "</p>" +
              "</span>" +
            "</a>"
        )
        .join("")
    );
  }

  /* --- Visualizador de fotos (lightbox) --- */
  function abrirLightbox(indice) {
    fotoAtual = indice;
    mostrarFoto();
    $("#lightbox").classList.add("aberto");
    document.body.classList.add("trava-rolagem");
  }

  function fecharLightbox() {
    $("#lightbox").classList.remove("aberto");
    document.body.classList.remove("trava-rolagem");
  }

  function mostrarFoto() {
    const f = fotosVisiveis[fotoAtual];
    if (!f) return;
    $("#lb-img").src = f.imagem;
    $("#lb-img").alt = f.titulo;
    escrever("#lb-titulo", f.titulo);
    escrever("#lb-legenda", f.legenda);
  }

  function navegarFoto(passo) {
    fotoAtual = (fotoAtual + passo + fotosVisiveis.length) % fotosVisiveis.length;
    mostrarFoto();
  }

  function ligarLightbox() {
    $("#lb-fechar").addEventListener("click", fecharLightbox);
    $("#lb-ant").addEventListener("click", () => navegarFoto(-1));
    $("#lb-prox").addEventListener("click", () => navegarFoto(1));
    $("#lightbox").addEventListener("click", (ev) => {
      if (ev.target.id === "lightbox") fecharLightbox();
    });
  }

  /* ========================================================================
     14. A VOZ DO CBNB (opinião)
     ======================================================================== */
  function montarOpinioes() {
    preencher(
      "#opinioes-grade",
      OPINIOES.map(
        (o, i) =>
          '<article class="opiniao revelar" data-atraso="' + ((i % 2) + 1) + '">' +
            "<h3>" + limpar(o.titulo) + "</h3>" +
            '<p class="texto">' + limpar(o.texto) + "</p>" +
            '<div class="assina">' +
              "<span>Por <strong>" + limpar(o.autora) + "</strong></span>" +
              "<span>" + limpar(o.data) + "</span>" +
            "</div>" +
          "</article>"
      ).join("")
    );
  }

  /* ========================================================================
     15. VOCÊ SABIA? (curiosidades)
     ======================================================================== */
  function montarCuriosidades() {
    preencher(
      "#curiosidades-grade",
      CURIOSIDADES.map(
        (c, i) =>
          '<article class="curiosidade revelar" data-atraso="' + ((i % 4) + 1) + '">' +
            '<div class="ico">' + c.icone + "</div>" +
            '<span class="tema">' + limpar(c.tema) + "</span>" +
            "<p>" + limpar(c.texto) + "</p>" +
          "</article>"
      ).join("")
    );
  }

  /* ========================================================================
     16. SOBRE O CBNB NEWS
     ======================================================================== */
  function montarSobre() {
    preencher(
      "#sobre-texto",
      SOBRE.paragrafos.map((p) => "<p>" + limpar(p) + "</p>").join("")
    );

    preencher(
      "#sobre-numeros",
      SOBRE.numeros
        .map(
          (n) =>
            '<div class="numero">' +
              '<div class="valor">' + limpar(n.valor) + "</div>" +
              '<div class="rotulo">' + limpar(n.rotulo) + "</div>" +
            "</div>"
        )
        .join("")
    );
  }

  /* ========================================================================
     16a. CRÉDITOS DO SITE (página "Quem fez este site")
     ======================================================================== */
  function montarCreditos() {
    if (typeof CREDITOS === "undefined") return;

    preencher(
      "#creditos-texto",
      '<p class="creditos-chamada">' + limpar(CREDITOS.chamada) + "</p>" +
      CREDITOS.paragrafos.map((t) => "<p>" + limpar(t) + "</p>").join("")
    );

    preencher(
      "#creditos-areas",
      CREDITOS.areas
        .map(
          (a, i) =>
            '<article class="curiosidade revelar" data-atraso="' + ((i % 3) + 1) + '">' +
              '<div class="ico">' + a.icone + "</div>" +
              '<h3 style="font-size:1rem;margin-bottom:6px;">' + limpar(a.nome) + "</h3>" +
              "<p>" + limpar(a.descricao) + "</p>" +
            "</article>"
        )
        .join("")
    );

    escrever("#creditos-assinatura", CREDITOS.assinatura);
  }

  /* ========================================================================
     16b. CAMINHO PARA A PLATAFORMA
     Faixa da página inicial com o atalho para a plataforma da escola.
     Enquanto o endereço não estiver preenchido em conteudo.js, a faixa avisa
     o que falta fazer, em vez de mostrar um link que não leva a lugar nenhum.
     ======================================================================== */
  function montarPlataforma() {
    if (typeof PLATAFORMA === "undefined") return;

    // Sem endereço cadastrado, a faixa simplesmente não aparece.
    if (!PLATAFORMA.url || PLATAFORMA.url === "#") return;

    const acao =
      '<a class="btn btn--claro" href="' + limpar(PLATAFORMA.url) + '"' +
        (PLATAFORMA.abrirEmNovaAba ? ' target="_blank" rel="noopener"' : "") + ">" +
        limpar(PLATAFORMA.textoBotao) +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
          '<path d="M7 17 17 7M9 7h8v8"/></svg>' +
      "</a>";

    preencher(
      "#plataforma",
      '<div class="chamada-final revelar">' +
        '<span class="olho-plataforma">🔗 Acesso rápido</span>' +
        "<h2>" + limpar(PLATAFORMA.nome) + "</h2>" +
        "<p>" + limpar(PLATAFORMA.descricao) + "</p>" +
        '<div class="botoes">' + acao + "</div>" +
      "</div>"
    );
  }

  /* ========================================================================
     17. JANELA DA NOTÍCIA COMPLETA
     ======================================================================== */
  function abrirNoticia(id) {
    // "destaque-edicao" é a matéria de capa; os outros ids vêm da lista NOTICIAS.
    const n = id === "destaque-edicao" ? DESTAQUE_EDICAO : NOTICIAS.find((x) => x.id === id);
    if (!n) return;

    preencher(
      "#modal-conteudo",
      '<div class="modal-img"><img src="' + limpar(n.imagem) + '" alt="Foto: ' + limpar(n.titulo) + '"></div>' +
      '<div class="modal-corpo">' +
        '<span class="etiqueta etiqueta--solida">' + iconeCategoria(n.categoria) + " " + limpar(nomeCategoria(n.categoria)) + "</span>" +
        "<h2>" + limpar(n.titulo) + "</h2>" +
        '<div class="meta modal-meta">' +
          "<span>" + ICONES.calendario + limpar(n.data) + "</span>" +
          "<span>" + ICONES.pessoa + limpar(n.autoria || "Redação CBNB News") + "</span>" +
        "</div>" +
        '<div class="modal-texto">' +
          (n.texto || [n.resumo]).map((p) => "<p>" + limpar(p) + "</p>").join("") +
        "</div>" +
      "</div>"
    );

    $("#modal-noticia").classList.add("aberto");
    document.body.classList.add("trava-rolagem");
    $("#modal-noticia").scrollTop = 0;
  }

  function fecharNoticia() {
    $("#modal-noticia").classList.remove("aberto");
    document.body.classList.remove("trava-rolagem");
  }

  function ligarModalNoticia() {
    // Um único "ouvinte" para todos os botões "Leia mais" da página.
    document.addEventListener("click", function (ev) {
      const botao = ev.target.closest("[data-noticia]");
      if (botao) {
        ev.preventDefault();
        abrirNoticia(botao.dataset.noticia);
      }
    });

    $("#modal-fechar").addEventListener("click", fecharNoticia);
    $("#modal-noticia").addEventListener("click", (ev) => {
      if (ev.target.id === "modal-noticia") fecharNoticia();
    });
  }

  /* ========================================================================
     18. BUSCA
     ======================================================================== */
  function abrirBusca() {
    $("#busca").classList.add("aberta");
    document.body.classList.add("trava-rolagem");
    setTimeout(() => $("#campo-busca").focus(), 120);
    pesquisar("");
  }

  function fecharBusca() {
    $("#busca").classList.remove("aberta");
    document.body.classList.remove("trava-rolagem");
    $("#campo-busca").value = "";
  }

  function pesquisar(termo) {
    const alvo = $("#busca-resultados");
    const texto = termo.trim().toLowerCase();

    // Sem termo: mostra as notícias mais recentes como sugestão.
    if (texto.length === 0) {
      alvo.innerHTML =
        '<div class="busca-dica" style="background:#fff;color:var(--cinza-600)">Sugestões desta edição:</div>' +
        NOTICIAS.slice(0, 4).map(itemBusca).join("");
      ligarResultados();
      return;
    }

    const achados = NOTICIAS.filter((n) =>
      (n.titulo + " " + n.resumo + " " + nomeCategoria(n.categoria) + " " + (n.texto || []).join(" "))
        .toLowerCase()
        .indexOf(texto) !== -1
    );

    alvo.innerHTML = achados.length
      ? achados.map(itemBusca).join("")
      : '<div class="busca-vazio">Nenhum resultado para <strong>“' + limpar(termo) + '”</strong>.<br>Tente outra palavra.</div>';

    ligarResultados();
  }

  function itemBusca(n) {
    return (
      '<button class="busca-item" data-busca="' + limpar(n.id) + '">' +
        '<img src="' + limpar(n.imagem) + '" alt="">' +
        "<span>" +
          '<span class="busca-cat">' + limpar(nomeCategoria(n.categoria)) + "</span>" +
          "<h4>" + limpar(n.titulo) + "</h4>" +
        "</span>" +
      "</button>"
    );
  }

  function ligarResultados() {
    $$("#busca-resultados .busca-item").forEach((item) => {
      item.addEventListener("click", function () {
        fecharBusca();
        abrirNoticia(this.dataset.busca);
      });
    });
  }

  function ligarBusca() {
    $("#abrir-busca").addEventListener("click", abrirBusca);
    $("#fechar-busca").addEventListener("click", fecharBusca);
    $("#busca").addEventListener("click", (ev) => {
      if (ev.target.id === "busca") fecharBusca();
    });
    $("#campo-busca").addEventListener("input", function () {
      pesquisar(this.value);
    });
  }

  /* ========================================================================
     19. MENU, ROLAGEM E ANIMAÇÕES
     ======================================================================== */

  /* --- Menu no celular --- */
  function ligarMenu() {
    const btn = $("#btn-menu");
    const nav = $("#nav");
    const fundo = $("#fundo-menu");

    function alternar(abrir) {
      nav.classList.toggle("aberto", abrir);
      fundo.classList.toggle("visivel", abrir);
      btn.classList.toggle("aberto", abrir);
      btn.setAttribute("aria-expanded", String(abrir));
      document.body.classList.toggle("trava-rolagem", abrir);
    }

    btn.addEventListener("click", () => alternar(!nav.classList.contains("aberto")));
    fundo.addEventListener("click", () => alternar(false));

    // Ao clicar em um item do menu, fecha o painel.
    $$("#nav a").forEach((link) => link.addEventListener("click", () => alternar(false)));
  }

  /* --- Sombra do cabeçalho + botão "voltar ao topo" --- */
  function ligarRolagem() {
    const cabecalho = $("#cabecalho");
    const topoBtn = $("#topo-btn");

    function aoRolar() {
      const y = window.scrollY;
      cabecalho.classList.toggle("rolou", y > 12);
      topoBtn.classList.toggle("visivel", y > 640);
      ativarRevelacao();
    }

    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", ativarRevelacao, { passive: true });
    // Imagens que carregam depois mudam a altura da página: reavalia.
    window.addEventListener("load", revelarVisiveis);
    topoBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    aoRolar();
  }

  /* --- Animação de entrada dos elementos ao rolar ---
     Revela todo elemento com a classe "revelar" que já apareceu na tela.
     Também revela os que ficaram para trás quando se pula direto para uma
     seção pelo menu — assim nada fica invisível por engano. */
  let aguardandoQuadro = false;

  function revelarVisiveis() {
    const limite = window.innerHeight - 40;

    $$(".revelar:not(.visivel)").forEach((el) => {
      // topo do elemento já passou pela parte de baixo da tela?
      if (el.getBoundingClientRect().top < limite) el.classList.add("visivel");
    });
  }

  /* Agenda a verificação para o próximo quadro de animação (evita travar a rolagem). */
  function ativarRevelacao() {
    if (aguardandoQuadro) return;
    aguardandoQuadro = true;
    requestAnimationFrame(() => {
      aguardandoQuadro = false;
      revelarVisiveis();
    });
  }

  /* --- Teclado: ESC fecha janelas; setas navegam nas fotos --- */
  function ligarTeclado() {
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") {
        if ($("#lightbox").classList.contains("aberto")) fecharLightbox();
        else if ($("#modal-noticia").classList.contains("aberto")) fecharNoticia();
        else if ($("#busca").classList.contains("aberta")) fecharBusca();
      }

      if ($("#lightbox").classList.contains("aberto")) {
        if (ev.key === "ArrowLeft") navegarFoto(-1);
        if (ev.key === "ArrowRight") navegarFoto(1);
      }

      // Ctrl + K abre a busca (atalho comum em portais de notícia).
      if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === "k") {
        ev.preventDefault();
        abrirBusca();
      }
    });
  }

  /* ========================================================================
     20. INICIALIZAÇÃO — monta tudo quando a página carrega
     ======================================================================== */
  function iniciar() {
    // Cabeçalho, menu, rodapé e janelas (vêm do arquivo layout.js)
    montarLayout();

    // Conteúdo
    montarEdicao();
    montarPalavraSemana();
    montarDestaques();
    montarDestaqueEdicao();
    montarFiltrosNoticias();
    montarNoticias();
    montarEscola();
    montarAgenda();
    montarAgendaResumo();
    montarEntrevista();
    montarDepoimentos();
    montarFuncoes();
    montarFiltrosGaleria();
    montarGaleria();
    montarGaleriaResumo();
    montarOpinioes();
    montarCuriosidades();
    montarSobre();
    montarCreditos();
    montarPlataforma();

    // Funcionamento
    ligarCarregarMais();
    ligarModalNoticia();
    ligarLightbox();
    ligarBusca();
    ligarMenu();
    ligarRolagem();
    ligarTeclado();
    ativarRevelacao();
  }

  document.addEventListener("DOMContentLoaded", iniciar);
})();

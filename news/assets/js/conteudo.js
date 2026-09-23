/* ==========================================================================
   CBNB NEWS — ARQUIVO DE CONTEÚDO
   --------------------------------------------------------------------------
   ESTE É O ÚNICO ARQUIVO QUE A EQUIPE PRECISA EDITAR PARA ATUALIZAR O SITE.
   Tudo o que aparece no site (notícias, agenda, entrevista, galeria...) está
   escrito aqui embaixo. Basta trocar os textos entre aspas.

   REGRAS SIMPLES:
   1) Nunca apague as aspas "  " nem as vírgulas , no fim das linhas.
   2) Para criar uma notícia nova, copie um bloco inteiro { ... } e cole logo
      abaixo, trocando os textos.
   3) Para apagar algo, apague o bloco { ... } inteiro, incluindo a vírgula.
   4) Depois de salvar, é só atualizar a página no navegador (tecla F5).

   ========================================================================== */

/* --------------------------------------------------------------------------
   1. IDENTIFICAÇÃO DA EDIÇÃO
   Aparece na tarja do topo, no banner principal e no rodapé.
   -------------------------------------------------------------------------- */
const EDICAO = {
  nome: "CBNB NEWS",
  escola: "Colégio Batista Nova Betânia",
  numero: "Edição de Setembro de 2026",
  data: "28 de setembro de 2026",
  ano: "2026",
  chamadaTopo: "Produzido pelos estudantes do Colégio Batista Nova Betânia.",
  slogan: "A voz dos estudantes do Colégio Batista Nova Betânia",
  linhaFina: "Informação, criatividade e protagonismo estudantil em um só lugar."
};

/* --------------------------------------------------------------------------
   2. NOSSA PLATAFORMA
   O botão verde do cabeçalho e o atalho do rodapé apontam para cá.

   ⚠️ TROQUE O ENDEREÇO ABAIXO pelo link verdadeiro da plataforma.
      Enquanto o campo "url" estiver com "#", o botão fica escondido
      automaticamente — assim ninguém clica em um link que não existe.
   -------------------------------------------------------------------------- */
const PLATAFORMA = {
  nome: "Plataforma CBNB",
  url: "#",                       // ← cole aqui o endereço (ex.: "https://...")
  descricao: "Acesse a plataforma do Colégio Batista Nova Betânia: materiais, atividades e comunicados.",
  textoBotao: "Ir para a plataforma",
  abrirEmNovaAba: true
};

/* --------------------------------------------------------------------------
   3. PALAVRA DA SEMANA
   O versículo aparece em destaque na página inicial e no alto das notícias.
   Para trocar a cada semana, basta mudar os textos abaixo.
   -------------------------------------------------------------------------- */
const PALAVRA_SEMANA = {
  tema: "Direção",
  versiculo: "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.",
  referencia: "Salmos 119:105",
  reflexao: "Começar o dia com a Palavra é como acender uma luz antes de sair de casa: ela não tira o caminho da frente, mas mostra onde pisar. É esse o sentido do devocional diário no CBNB — dar direção antes que a correria comece."
};

/* --------------------------------------------------------------------------
   4. CATEGORIAS DAS NOTÍCIAS
   O campo "id" é usado nas notícias e nos filtros. O "nome" é o que aparece.
   -------------------------------------------------------------------------- */
const CATEGORIAS = [
  { id: "devocional",    nome: "Palavra da Semana", icone: "📖" },
  { id: "vida-escolar",  nome: "Vida Escolar",      icone: "🏫" },
  { id: "educacao",      nome: "Educação",          icone: "✏️" },
  { id: "esportes",      nome: "Esportes",          icone: "🏆" },
  { id: "cultura",       nome: "Cultura",           icone: "🎭" },
  { id: "tecnologia",    nome: "Tecnologia",        icone: "💡" },
  { id: "meio-ambiente", nome: "Meio Ambiente",     icone: "🌱" },
  { id: "opiniao",       nome: "Opinião",           icone: "💬" }
];

/* --------------------------------------------------------------------------
   5. DESTAQUE DA EDIÇÃO (a matéria principal, com imagem grande)
   -------------------------------------------------------------------------- */
const DESTAQUE_EDICAO = {
  categoria: "esportes",
  titulo: "Equipe Azul é campeã dos Jogos de Inverno 2026",
  resumo: "Depois de uma disputa acirrada com as equipes verde, vermelha, roxa e cinza, a Azul somou o maior número de pontos e levantou o troféu dos Jogos de Inverno deste ano.",
  data: "28 de setembro de 2026",
  autoria: "Equipe de Redação do CBNB News",
  imagem: "img/web/27.jpg",
  legenda: "Equipe Azul reunida durante os Jogos de Inverno 2026. Foto: equipe de fotografia do CBNB News.",
  // Cada item do array vira um parágrafo do texto completo.
  texto: [
    "A Equipe Azul é a campeã dos Jogos de Inverno 2026 do Colégio Batista Nova Betânia. O resultado foi confirmado no encerramento, depois de dias de provas que envolveram todas as turmas da escola.",
    "A disputa foi decidida no somatório de pontos. A Azul manteve a regularidade nas provas coletivas e garantiu a liderança nas rodadas finais, seguida de perto pelas equipes verde, vermelha, roxa e cinza.",
    "Mais do que o placar, o que marcou os Jogos foi a participação. Cada equipe organizou a própria torcida, escolheu as cores, preparou os gritos de guerra e cuidou da pintura facial — detalhes que tomaram os corredores da escola durante toda a semana.",
    "A equipe do CBNB News acompanhou as provas e registrou os bastidores. As fotos estão na galeria do site.",
    "A comissão organizadora agradeceu a participação de estudantes, professores e funcionários, e adiantou que o formato deve ser mantido na próxima edição dos Jogos."
  ]
};

/* --------------------------------------------------------------------------
   6. NOTÍCIAS
   Marque "destaqueSemana: true" para a notícia aparecer nos "Destaques da
   Semana" da página inicial.
   -------------------------------------------------------------------------- */
const NOTICIAS = [
  {
    id: "n1",
    titulo: "Palavra da Semana: o devocional diário do CBNB",
    categoria: "devocional",
    data: "28 de setembro de 2026",
    autoria: "Equipe de Redação",
    imagem: "img/web/18.jpg",
    resumo: "“Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.” (Salmos 119:105). O versículo abre a semana e orienta o devocional diário das turmas.",
    destaqueSemana: true,
    texto: [
      "“Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.” (Salmos 119:105) É este o versículo que abre a semana no Colégio Batista Nova Betânia.",
      "O dia começa com o devocional. É um momento curto, feito em sala ou no pátio, com uma leitura, uma reflexão e um tempo de oração antes do início das aulas.",
      "Cada semana tem um tema, a Palavra da Semana, que orienta as leituras dos cinco dias. O tema é escolhido pela equipe pedagógica junto com a coordenação e trabalhado de formas diferentes conforme a faixa etária das turmas.",
      "Nas turmas menores, o devocional costuma incluir histórias, músicas e atividades. Nas turmas maiores, o formato abre mais espaço para conversa: os estudantes comentam o texto, trazem exemplos do dia a dia e relacionam o tema com situações da escola.",
      "A partir desta edição, o CBNB News passa a publicar a Palavra da Semana no jornal. A ideia é que quem faltou ou quer retomar o tema possa acompanhar também por aqui.",
      "Sugestões de temas podem ser entregues à coordenação ou à equipe do jornal."
    ]
  },
  {
    id: "n2",
    titulo: "Equipe Azul conquista o título dos Jogos de Inverno 2026",
    categoria: "esportes",
    data: "28 de setembro de 2026",
    autoria: "Equipe de Esportes",
    imagem: "img/web/22.jpg",
    resumo: "Com o maior número de pontos somados nas provas, a Azul ficou com o troféu. Veja como foi a disputa entre as cinco equipes.",
    destaqueSemana: true,
    texto: [
      "Os Jogos de Inverno 2026 terminaram com a Equipe Azul no lugar mais alto do pódio. A competição reuniu cinco equipes — azul, verde, vermelha, roxa e cinza — em provas esportivas e de integração.",
      "A pontuação foi somada ao longo de toda a semana. Além dos resultados nas quadras, as equipes ganharam pontos por participação da torcida, organização e cumprimento das regras combinadas no início dos Jogos.",
      "A Azul se destacou pela constância: não venceu todas as provas, mas terminou bem colocada em quase todas elas, o que garantiu a diferença no placar final.",
      "As demais equipes também tiveram bons momentos. A vermelha levou o prêmio de torcida mais animada e a verde venceu o circuito de revezamento.",
      "O encerramento teve entrega de troféu, foto oficial das equipes e agradecimento aos professores que acompanharam as provas."
    ]
  },
  {
    id: "n3",
    titulo: "Dia das Crianças será comemorado em 9 de outubro",
    categoria: "vida-escolar",
    data: "28 de setembro de 2026",
    autoria: "Equipe de Redação",
    imagem: "img/web/7.jpg",
    resumo: "A escola preparou uma programação especial para a data, com brincadeiras, atividades recreativas e um momento entre as turmas.",
    destaqueSemana: true,
    texto: [
      "A comemoração do Dia das Crianças no Colégio Batista Nova Betânia acontece no dia 9 de outubro, uma sexta-feira. A programação ocupa o turno das aulas e envolve todas as turmas.",
      "Estão previstas atividades recreativas, brincadeiras em grupo e um momento de confraternização entre as turmas. A escola pediu que os estudantes venham com roupas confortáveis no dia.",
      "A organização é feita pela coordenação com o apoio dos professores. A equipe do CBNB News vai cobrir o evento e publicar as fotos na próxima edição.",
      "Outras informações sobre horários e materiais serão enviadas pelos canais oficiais da escola."
    ]
  },
  {
    id: "n4",
    titulo: "Simulado acontece no dia 5 de outubro",
    categoria: "educacao",
    data: "28 de setembro de 2026",
    autoria: "Equipe de Educação",
    imagem: "img/web/24.jpg",
    resumo: "A prova reúne o conteúdo trabalhado no semestre. Veja as dicas de preparação reunidas pela equipe do jornal.",
    destaqueSemana: true,
    texto: [
      "O simulado está marcado para o dia 5 de outubro, uma segunda-feira. A prova cobre o conteúdo trabalhado ao longo do semestre e serve como preparação para as avaliações finais.",
      "A recomendação da coordenação é simples: revisar aos poucos, em vez de deixar tudo para a véspera. Refazer exercícios já corrigidos e explicar a matéria para um colega estão entre as formas mais eficientes de revisar.",
      "Nos dias que antecedem o simulado, os professores abrem plantões de dúvidas. Os horários ficam disponíveis com a coordenação.",
      "No dia da prova, é preciso levar material próprio e chegar no horário. Celulares ficam guardados durante a aplicação.",
      "Os resultados são entregues em sala, com comentários sobre os pontos que ainda precisam de atenção."
    ]
  },
  {
    id: "n5",
    titulo: "Feira de Ciências do CBNB está marcada para 26 de outubro",
    categoria: "educacao",
    data: "28 de setembro de 2026",
    autoria: "Equipe de Redação",
    imagem: "img/web/20.jpg",
    resumo: "As turmas já começaram a montar os projetos. A apresentação acontece no fim de outubro, aberta às famílias.",
    destaqueSemana: false,
    texto: [
      "A Feira de Ciências do Colégio Batista Nova Betânia acontece no dia 26 de outubro. As turmas já começaram a escolher os temas e a montar os experimentos que serão apresentados.",
      "A proposta é usar materiais simples e acessíveis. Mais do que o resultado, a avaliação considera a clareza da explicação e o registro do processo em um diário de bordo.",
      "Cada grupo fica responsável por uma bancada e recebe visitantes durante a apresentação. Os estudantes precisam saber explicar o experimento sem ler o cartaz.",
      "A feira é aberta às famílias. Os horários de visitação serão divulgados pela escola mais perto da data.",
      "A equipe do CBNB News vai acompanhar a montagem dos projetos e publicar uma reportagem especial na edição seguinte."
    ]
  },
  {
    id: "n6",
    titulo: "Semana do Trânsito trabalha regras e segurança com as turmas",
    categoria: "vida-escolar",
    data: "28 de setembro de 2026",
    autoria: "Equipe de Redação",
    imagem: "img/web/233.jpg",
    resumo: "Ação pedagógica usou atividades ilustradas para explicar sinalização, faixa de pedestres e cuidados no caminho para a escola.",
    destaqueSemana: false,
    texto: [
      "A Semana do Trânsito movimentou as turmas do Fundamental I com uma ação pedagógica sobre sinalização e segurança.",
      "As atividades incluíram pintura de semáforos, reconhecimento de placas e uma conversa sobre o caminho de casa até a escola: onde atravessar, por que usar a faixa de pedestres e como se comportar dentro do carro e do ônibus.",
      "Os trabalhos produzidos pelas turmas ficaram expostos nos corredores da escola.",
      "Segundo a coordenação, a ideia é que o assunto não fique restrito a uma semana: as combinações feitas em sala continuam sendo lembradas ao longo do ano."
    ]
  },
  {
    id: "n7",
    titulo: "Passeio pedagógico leva turmas para estudo fora da escola",
    categoria: "meio-ambiente",
    data: "28 de setembro de 2026",
    autoria: "Equipe de Redação",
    imagem: "img/web/26.jpg",
    resumo: "A saída de campo uniu observação da natureza e conteúdo de sala de aula, com roteiro preparado pelos professores.",
    destaqueSemana: false,
    texto: [
      "As turmas participaram de um passeio pedagógico com roteiro preparado pelos professores. A proposta foi observar de perto conteúdos que costumam aparecer apenas nos livros.",
      "Durante a visita, os estudantes puderam observar animais e vegetação, anotar o que chamou atenção e tirar dúvidas com os monitores do local.",
      "De volta à escola, o material recolhido virou tema de atividades em sala, com desenhos, relatos e pesquisas sobre as espécies observadas.",
      "A equipe de fotografia do jornal acompanhou o grupo. As imagens estão na galeria do site."
    ]
  },
  {
    id: "n8",
    titulo: "Torcidas organizadas pelas equipes marcaram os Jogos",
    categoria: "cultura",
    data: "28 de setembro de 2026",
    autoria: "Equipe de Cultura",
    imagem: "img/web/13.jpg",
    resumo: "Gritos de guerra, pintura facial e bandeiras: a preparação das torcidas começou semanas antes da primeira prova.",
    destaqueSemana: false,
    texto: [
      "Antes mesmo da primeira prova dos Jogos de Inverno, as equipes já estavam organizadas. Cada uma escolheu um responsável pela torcida e definiu como faria a sua apresentação.",
      "Houve grito de guerra ensaiado no intervalo, pintura facial feita entre colegas, bandeiras improvisadas e faixas com o nome das turmas.",
      "A torcida valia pontos na classificação geral, mas o critério não era o volume: a comissão avaliou organização, criatividade e respeito às outras equipes.",
      "O prêmio de torcida mais animada ficou com a equipe vermelha."
    ]
  },
  {
    id: "n9",
    titulo: "Biblioteca ganha novo espaço de estudo em grupo",
    categoria: "cultura",
    data: "28 de setembro de 2026",
    autoria: "Equipe de Redação",
    imagem: "img/web/17.jpg",
    resumo: "Mesas reorganizadas e horário ampliado no contraturno criaram um ponto de encontro para quem quer estudar junto.",
    destaqueSemana: false,
    texto: [
      "A biblioteca da escola passou por uma reorganização e agora conta com um espaço destinado ao estudo em grupo.",
      "As mesas foram reposicionadas para permitir que turmas diferentes estudem juntas, e o horário de funcionamento no contraturno foi ampliado.",
      "A proposta partiu de um pedido dos próprios estudantes, que relataram dificuldade em encontrar um lugar tranquilo para estudar em grupo dentro da escola.",
      "O uso do espaço segue combinados simples: conversa em tom baixo, mesas organizadas ao sair e agendamento para grupos maiores."
    ]
  },
  {
    id: "n11",
    titulo: "Escola discute uso consciente do celular em sala",
    categoria: "tecnologia",
    data: "28 de setembro de 2026",
    autoria: "Equipe de Pesquisa",
    imagem: "img/web/11.jpg",
    resumo: "Em vez de proibição pura e simples, as turmas participaram da construção dos combinados sobre quando o aparelho pode ser usado.",
    destaqueSemana: false,
    texto: [
      "As turmas do colégio participaram de uma roda de conversa sobre o uso do celular em sala de aula. A proposta não foi anunciar uma regra pronta, e sim construir os combinados junto com os estudantes.",
      "A conversa partiu de uma pergunta simples: em quais momentos o celular ajuda e em quais atrapalha? As respostas foram anotadas em um painel e transformadas em uma lista de acordos por turma.",
      "Entre os pontos mais citados estavam o uso do aparelho para pesquisa orientada e para registrar a lousa, e a necessidade de guardá-lo durante explicações e avaliações.",
      "Os acordos ficaram expostos em cada sala. A coordenação avaliará o resultado ao fim do bimestre.",
      "A equipe de pesquisa do jornal aproveitou o tema para lembrar um cuidado que vale para qualquer aparelho: conferir a fonte antes de acreditar em uma informação encontrada na internet."
    ]
  },
  {
    id: "n12",
    titulo: "Enquete: o que a escola quer ler no CBNB News",
    categoria: "opiniao",
    data: "28 de setembro de 2026",
    autoria: "Equipe de Redes Sociais",
    imagem: "img/web/23.jpg",
    resumo: "Antes do lançamento, a equipe do jornal ouviu as turmas para saber quais assuntos deveriam entrar na primeira edição.",
    destaqueSemana: false,
    texto: [
      "Antes de fechar a primeira edição, a equipe do CBNB News passou pelas turmas com uma pergunta: o que vocês gostariam de ler em um jornal feito dentro da escola?",
      "Os assuntos mais pedidos foram os eventos do colégio, como os Jogos de Inverno, as datas importantes do calendário e um espaço para a opinião dos estudantes.",
      "Também apareceram pedidos por curiosidades, entrevistas com professores e uma seção fixa sobre o devocional — sugestão que deu origem à Palavra da Semana.",
      "A enquete continua aberta. Quem quiser sugerir uma pauta pode procurar qualquer integrante da equipe do jornal.",
      "As sugestões recebidas vão orientar as próximas edições."
    ]
  },
  {
    id: "n10",
    titulo: "CBNB News estreia com equipe de sete integrantes",
    categoria: "vida-escolar",
    data: "28 de setembro de 2026",
    autoria: "Equipe de Redação",
    imagem: "img/web/10.jpg",
    resumo: "O jornal escolar é produzido por sete estudantes, divididos entre redação, fotografia, entrevistas, pesquisa, design, revisão e redes sociais.",
    destaqueSemana: true,
    texto: [
      "Esta é a primeira edição do CBNB News, o jornal escolar do Colégio Batista Nova Betânia. A publicação é produzida por uma equipe de sete estudantes.",
      "O grupo se dividiu em sete frentes de trabalho: redação, fotografia, entrevistas, pesquisa, design, revisão e redes sociais. Todas as etapas — da escolha das pautas até a publicação — são feitas pelos próprios estudantes, com o acompanhamento da equipe pedagógica.",
      "A proposta é registrar o que acontece na escola e dar espaço para que a comunidade escolar conte as próprias histórias.",
      "As edições seguintes trarão a cobertura do Dia das Crianças, do simulado e da Feira de Ciências.",
      "Quem quiser sugerir uma pauta ou participar de alguma das equipes pode procurar a equipe do jornal."
    ]
  }
];

/* --------------------------------------------------------------------------
   7. AGENDA CBNB
   Para adicionar um evento novo, copie um bloco { ... } e cole no fim da lista.
   Use "tipo" para colorir a etiqueta: publicacao, cultural, esportivo,
   projeto, avaliacao, entrevista, devocional ou especial.
   -------------------------------------------------------------------------- */
const AGENDA = [
  { dia: "28", mes: "SET", ano: "2026", titulo: "Lançamento do CBNB News",      tipo: "publicacao", descricao: "Publicação da primeira edição do jornal escolar, produzida pela equipe de sete estudantes." },
  { dia: "05", mes: "OUT", ano: "2026", titulo: "Simulado",                     tipo: "avaliacao",  descricao: "Prova com o conteúdo trabalhado no semestre. Plantões de dúvidas nos dias anteriores." },
  { dia: "09", mes: "OUT", ano: "2026", titulo: "Dia das Crianças",             tipo: "cultural",   descricao: "Programação especial com brincadeiras e atividades recreativas para todas as turmas." },
  { dia: "26", mes: "OUT", ano: "2026", titulo: "Feira de Ciências",            tipo: "projeto",    descricao: "Apresentação dos experimentos montados pelas turmas, com visitação aberta às famílias." }
];

/* --------------------------------------------------------------------------
   8. ENTREVISTA DA EDIÇÃO
   Preencha com as respostas reais assim que a entrevista for gravada.
   -------------------------------------------------------------------------- */
const ENTREVISTA = {
  // Preencha o nome e a foto quando a entrevista real for gravada.
  // Enquanto o campo "imagem" estiver vazio, o card mostra um selo de aspas.
  nome: "",
  cargo: "Professor(a) do Colégio Batista Nova Betânia",
  tempoCasa: "Há 8 anos na escola",
  imagem: "",
  chamada: "“Ensinar é aprender duas vezes: uma quando a gente estuda e outra quando a gente explica.”",
  perguntas: [
    {
      p: "Qual é a sua função no colégio?",
      r: "Sou professor(a) e também acompanho alguns projetos do contraturno. Além das aulas, ajudo a orientar grupos de estudo e atividades que os estudantes propõem."
    },
    {
      p: "O que você mais gosta no CBNB?",
      r: "A convivência. É uma escola em que as pessoas se conhecem pelo nome, e isso muda tudo. Quando um estudante está diferente, alguém percebe. Esse cuidado não aparece em boletim, mas faz diferença."
    },
    {
      p: "Qual projeto escolar considera mais importante?",
      r: "Todo projeto em que o estudante é protagonista. Este jornal é um bom exemplo: eles pesquisam, escrevem, revisam e assumem a responsabilidade pelo que publicam. Aprende-se muito mais fazendo do que ouvindo."
    },
    {
      p: "Que conselho você daria para os alunos?",
      r: "Perguntem. A pergunta que parece boba costuma ser a que a turma inteira queria fazer. E não tenham medo de errar em rascunho — é para isso que o rascunho existe."
    },
    {
      p: "O que espera para o futuro da escola?",
      r: "Que continue sendo um lugar onde se pode experimentar. Espero ver mais projetos nascendo dos próprios estudantes e mais espaços em que eles possam mostrar o que produzem."
    }
  ]
};

/* --------------------------------------------------------------------------
   9. VOZ DA EQUIPE (depoimentos curtos)
   Sem nomes: cada depoimento é identificado apenas pela função na equipe.
   -------------------------------------------------------------------------- */
const DEPOIMENTOS = [
  { texto: "Entrei na equipe só para ajudar na revisão e acabei escrevendo a primeira reportagem. Hoje é a atividade que eu mais espero na semana.", funcao: "Redação e Revisão" },
  { texto: "Fotografar os Jogos me fez prestar atenção em detalhes que eu nunca tinha notado na escola. A gente enxerga diferente com a câmera na mão.", funcao: "Fotografia" },
  { texto: "Na primeira entrevista eu tremia de nervoso. Na terceira, já era eu quem ajudava a montar as perguntas.", funcao: "Entrevistas" },
  { texto: "Descobri que pesquisar é mais do que procurar no celular: é conferir se a informação é verdadeira antes de publicar.", funcao: "Pesquisa" },
  { texto: "Eu achava que design era só escolher cor bonita. Aprendi que é organizar a informação para quem vai ler entender rápido.", funcao: "Design" }
];

/* --------------------------------------------------------------------------
  10. EQUIPE — AS SETE FUNÇÕES DO JORNAL
   São sete integrantes, uma função para cada. Por escolha da equipe, o site
   não publica nomes.
   -------------------------------------------------------------------------- */
const FUNCOES = [
  { icone: "✍️", nome: "Redação",       descricao: "Escreve as reportagens, apura os fatos e cuida da linguagem de cada matéria." },
  { icone: "📷", nome: "Fotografia",    descricao: "Registra eventos, aulas e bastidores que ilustram as páginas do jornal." },
  { icone: "🎤", nome: "Entrevistas",   descricao: "Prepara as perguntas, conversa com a comunidade escolar e transcreve as falas." },
  { icone: "🔎", nome: "Pesquisa",      descricao: "Confere dados, busca fontes confiáveis e sustenta as informações publicadas." },
  { icone: "🎨", nome: "Design",        descricao: "Organiza o visual, escolhe as imagens e cuida da identidade do CBNB News." },
  { icone: "📝", nome: "Revisão",       descricao: "Lê tudo antes da publicação, corrige a escrita e garante a clareza dos textos." },
  { icone: "📱", nome: "Redes sociais", descricao: "Divulga as edições, cria as chamadas e mantém o contato com quem lê o jornal." }
];

/* --------------------------------------------------------------------------
  11. GALERIA DE FOTOS
   Troque o campo "imagem" pelo caminho da foto.
   -------------------------------------------------------------------------- */
const GALERIA = [
  { imagem: "img/web/27.jpg",  categoria: "esportes", titulo: "Equipe Azul campeã",      legenda: "A equipe vencedora dos Jogos de Inverno 2026." },
  { imagem: "img/web/233.jpg", categoria: "sala",     titulo: "Semana do Trânsito",      legenda: "Atividade sobre sinalização feita em sala de aula." },
  { imagem: "img/web/13.jpg",  categoria: "eventos",  titulo: "Torcida vermelha",        legenda: "Equipe reunida na abertura dos Jogos de Inverno." },
  { imagem: "img/web/15.jpg",  categoria: "esportes", titulo: "Cores das equipes",       legenda: "Pintura facial marca a torcida de cada equipe." },
  { imagem: "img/web/26.jpg",  categoria: "projetos", titulo: "Passeio pedagógico",      legenda: "Observação da natureza durante a saída de campo." },
  { imagem: "img/web/5.jpg",   categoria: "momentos", titulo: "Entre uma prova e outra", legenda: "Registro espontâneo no pátio da escola." },
  { imagem: "img/web/19.jpg",  categoria: "alunos",   titulo: "Equipe vermelha",         legenda: "Comemoração durante uma das provas." },
  { imagem: "img/web/18.jpg",  categoria: "momentos", titulo: "Turmas do Fundamental",   legenda: "Estudantes dos primeiros anos do colégio." },
  { imagem: "img/web/23.jpg",  categoria: "eventos",  titulo: "Arquibancada cheia",      legenda: "Turmas acompanham as provas dos Jogos." },
  { imagem: "img/web/7.jpg",   categoria: "esportes", titulo: "Recreação no pátio",      legenda: "Brincadeiras e jogos entre as turmas." },
  { imagem: "img/web/10.jpg",  categoria: "alunos",   titulo: "Estudantes do CBNB",      legenda: "Grupo reunido durante os Jogos de Inverno." },
  { imagem: "img/web/4.jpg",   categoria: "projetos", titulo: "Mosaico dos Jogos",       legenda: "Um resumo em imagens das atividades da escola." }
];

/* Filtros que aparecem acima da galeria. */
const GALERIA_FILTROS = [
  { id: "todos",    nome: "Todas" },
  { id: "alunos",   nome: "Estudantes" },
  { id: "sala",     nome: "Sala de aula" },
  { id: "eventos",  nome: "Eventos" },
  { id: "esportes", nome: "Esportes" },
  { id: "projetos", nome: "Projetos escolares" },
  { id: "momentos", nome: "Momentos especiais" }
];

/* --------------------------------------------------------------------------
  12. A VOZ DO CBNB (artigos de opinião)
   Sem nomes: identificamos apenas a turma ou a função de quem escreve.
   -------------------------------------------------------------------------- */
const OPINIOES = [
  {
    titulo: "Por que o intervalo também é aula",
    autora: "Estudante do 9º ano",
    data: "28 de setembro de 2026",
    texto: "Passamos horas aprendendo conteúdo dentro da sala, mas é no intervalo que aprendemos a conviver. É ali que negociamos, dividimos, discordamos e fazemos as pazes. Defender um tempo de pausa de qualidade é defender também um tipo de aprendizado que nenhuma prova mede."
  },
  {
    titulo: "O que os Jogos de Inverno ensinam fora da quadra",
    autora: "Estudante do 1º ano",
    data: "28 de setembro de 2026",
    texto: "Ganhar é bom, mas o que fica dos Jogos não é o troféu. É a turma que se organizou sozinha, o grito de guerra ensaiado no intervalo e a colega que chamou quem estava de fora para entrar no time. Isso não aparece no placar e é a parte que a gente lembra no ano seguinte."
  },
  {
    titulo: "Simulado não é castigo",
    autora: "Estudante do 2º ano",
    data: "28 de setembro de 2026",
    texto: "A gente encara o simulado como uma ameaça, mas ele existe justamente para errar antes que o erro custe caro. É o único momento em que descobrir que não sabe algo é uma boa notícia. O problema não é a prova: é deixar a revisão para a véspera."
  },
  {
    titulo: "Começar o dia com o devocional",
    autora: "Estudante do 8º ano",
    data: "28 de setembro de 2026",
    texto: "No começo eu achava que era só mais uma parte da rotina. Com o tempo percebi que aqueles minutos mudam o jeito como a gente entra na sala. É o momento em que a turma para, respira e começa o dia junto — mesmo quem chegou apressado."
  }
];

/* --------------------------------------------------------------------------
  13. VOCÊ SABIA? (curiosidades)
   -------------------------------------------------------------------------- */
const CURIOSIDADES = [
  { icone: "📖", tema: "Educação",   texto: "Explicar um conteúdo em voz alta para outra pessoa é uma das formas mais eficientes de fixar o que se estudou — método conhecido como aprendizagem por ensino." },
  { icone: "🧠", tema: "Ciência",    texto: "Dormir bem depois de estudar ajuda a memória: é durante o sono que o cérebro organiza e consolida o que foi aprendido durante o dia." },
  { icone: "📰", tema: "História",   texto: "Os primeiros jornais escolares surgiram ainda no século XIX e serviam para treinar escrita, argumentação e trabalho em equipe — exatamente como o CBNB News." },
  { icone: "🌍", tema: "Meio Ambiente", texto: "Uma única árvore adulta pode liberar oxigênio suficiente para várias pessoas ao longo de um dia, além de ajudar a reduzir a temperatura ao redor." },
  { icone: "💻", tema: "Tecnologia", texto: "A palavra “bug”, usada para falhas em programas, ficou famosa depois que um inseto real foi encontrado travando um computador nos anos 1940." },
  { icone: "🏆", tema: "Esportes",   texto: "Em competições por equipes, o desempenho costuma depender mais da regularidade do que de vitórias isoladas — foi assim que a Equipe Azul venceu os Jogos de Inverno." },
  { icone: "⚽", tema: "Saúde",      texto: "Praticar atividade física melhora não só o corpo: o exercício aumenta a irrigação sanguínea no cérebro e favorece a concentração nas aulas seguintes." },
  { icone: "🗣️", tema: "Comunicação", texto: "Em uma entrevista, o silêncio é uma ferramenta: pausas depois da resposta costumam fazer o entrevistado complementar com o detalhe mais interessante." }
];

/* --------------------------------------------------------------------------
  14. SOBRE O CBNB NEWS
   -------------------------------------------------------------------------- */
const SOBRE = {
  paragrafos: [
    "O CBNB News é o jornal escolar do Colégio Batista Nova Betânia, produzido por uma equipe de sete estudantes. Ele nasceu da vontade do grupo de contar, com as próprias palavras, o que acontece no colégio.",
    "Cada edição passa por um processo completo de produção jornalística: pauta, apuração, entrevistas, redação, fotografia, design e revisão. Todas as etapas são realizadas pelos estudantes, com o acompanhamento da equipe pedagógica.",
    "Mais do que informar, o jornal existe para desenvolver leitura crítica, escrita, trabalho em equipe e responsabilidade com a informação publicada."
  ],
  numeros: [
    { valor: "7",    rotulo: "Integrantes da equipe" },
    { valor: "8",    rotulo: "Editorias" },
    { valor: "100%", rotulo: "Feito pelos estudantes" },
    { valor: "2026", rotulo: "Ano da edição" }
  ]
};

/* --------------------------------------------------------------------------
  15. CRÉDITOS DO SITE
  Quem desenvolveu o site do jornal: os alunos do Curso Técnico de Informática.
  -------------------------------------------------------------------------- */
const CREDITOS = {
  chamada: "O site do CBNB News foi desenvolvido pelos alunos do Curso Técnico de Informática do Colégio Batista Nova Betânia.",
  paragrafos: [
    "Enquanto a equipe de redação cuidava das matérias, das fotos e das entrevistas, a parte técnica do jornal ficou nas mãos da turma do Curso Técnico de Informática do colégio.",
    "Foram os alunos do Técnico que montaram a estrutura das páginas, escreveram o código, definiram as cores da identidade visual, organizaram as fotos e testaram o site no computador, no tablet e no celular.",
    "O projeto uniu as duas frentes: o conteúdo produzido pela equipe do jornal e o desenvolvimento feito pela turma de Informática. Nenhuma parte do site foi comprada pronta — tudo foi construído dentro da escola."
  ],
  // As frentes de trabalho do desenvolvimento
  areas: [
    { icone: "🧱", nome: "Estrutura das páginas", descricao: "Montagem das páginas, organização das seções e dos textos em cada arquivo." },
    { icone: "🎨", nome: "Identidade visual",     descricao: "Paleta de verdes, tipografia, cards arredondados, sombras e animações." },
    { icone: "⚙️", nome: "Programação",           descricao: "Menu, busca, filtros das notícias, janela de leitura e visualizador de fotos." },
    { icone: "📱", nome: "Responsividade",        descricao: "Ajustes para o site funcionar bem no celular, no tablet e no computador." },
    { icone: "🖼️", nome: "Tratamento de imagens", descricao: "Seleção, recorte e compressão das fotos para o site carregar rápido." },
    { icone: "🧪", nome: "Testes",                descricao: "Conferência de links, de imagens e do comportamento em telas de tamanhos diferentes." }
  ],
  // Assinatura final da página
  assinatura: "Curso Técnico de Informática — Colégio Batista Nova Betânia · 2026"
};

/* --------------------------------------------------------------------------
  16. A ESCOLA (seção "Escola" do menu)
   Texto institucional sobre o colégio. Ajuste conforme as informações oficiais.
   -------------------------------------------------------------------------- */
const ESCOLA = {
  titulo: "Colégio Batista Nova Betânia",
  chamada: "Um espaço de aprendizado, valores e convivência — e o cenário de tudo o que este jornal conta.",
  paragrafos: [
    "O Colégio Batista Nova Betânia é a casa da equipe que produz o CBNB News. É nos corredores, nas salas, na quadra, na biblioteca e no pátio que nascem as pautas publicadas a cada edição.",
    "A rotina começa com o devocional: um momento diário de leitura e reflexão, orientado pela Palavra da Semana, antes do início das aulas.",
    "A proposta pedagógica da escola valoriza o protagonismo estudantil. Os estudantes são incentivados a propor projetos, assumir responsabilidades e participar ativamente da vida escolar — este jornal é um dos resultados disso."
  ],
  // Pontos fortes exibidos em lista com ícone
  destaques: [
    { icone: "📖", titulo: "Fé e valores",        texto: "O devocional diário e a Palavra da Semana abrem o dia e orientam a convivência na escola." },
    { icone: "🤝", titulo: "Convivência",         texto: "Uma comunidade escolar em que estudantes de séries diferentes se conhecem e colaboram." },
    { icone: "🌟", titulo: "Protagonismo",        texto: "Projetos propostos e conduzidos pelos próprios estudantes, com acompanhamento pedagógico." },
    { icone: "🏆", titulo: "Esporte e integração", texto: "Os Jogos de Inverno reúnem todas as turmas em provas e atividades de equipe." }
  ]
};

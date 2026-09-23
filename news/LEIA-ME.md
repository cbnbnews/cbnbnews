# CBNB NEWS — Guia de edição do site

Jornal escolar do **Colégio Batista Nova Betânia**, produzido por uma equipe de sete estudantes.

Conteúdo produzido pela equipe do jornal. Site desenvolvido pelos alunos do
**Curso Técnico de Informática**.

> **Antes de publicar:** confira com a coordenação as informações das matérias e
> preencha a **entrevista** (`ENTREVISTA`, em `conteudo.js`) com as respostas reais.
> Por escolha da equipe, o site **não publica nomes de estudantes**.

---

## 1. Como abrir o site

Dê dois cliques no arquivo **`index.html`**. Ele abre no navegador, e dali dá para
navegar para as outras páginas pelo menu.

> Se quiser ver o site funcionando como em um servidor de verdade (recomendado, pois
> algumas funções ficam mais fiéis), abra o Prompt de Comando nesta pasta e execute:
>
> ```bash
> python -m http.server 8765
> ```
>
> Depois acesse `http://localhost:8765` no navegador. Para encerrar, feche a janela do comando.

---

## 2. Onde ficam os arquivos

O site tem **9 páginas**, uma para cada item do menu:

```
news/
├── index.html                  ← Início (banner, destaques, próximos eventos)
├── noticias.html               ← Notícias + Você Sabia?
├── escola.html                 ← Escola
├── eventos.html                ← Agenda CBNB
├── entrevistas.html            ← Entrevista da Edição + Voz das Alunas
├── equipe.html                 ← Feito por Nós + A Voz do CBNB
├── galeria.html                ← Galeria de fotos
├── sobre.html                  ← Sobre o CBNB News
├── creditos.html               ← Quem fez o site (Curso Técnico de Informática)
├── LEIA-ME.md                  ← este guia
├── img/
│   ├── cbnb.jpg                ← logotipo do colégio
│   ├── *.PNG                   ← fotos originais da escola
│   └── web/*.jpg               ← fotos reduzidas usadas pelo site
└── assets/
    ├── css/estilo.css          ← cores, fontes e layout
    ├── js/conteudo.js          ← ✏️ TODOS OS TEXTOS DO SITE (editar aqui)
    ├── js/layout.js            ← menu, cabeçalho e rodapé (iguais em todas as páginas)
    ├── js/principal.js         ← funcionamento (busca, filtros, janelas)
    └── img/*.svg               ← imagens provisórias (não são mais usadas)
```

**Para atualizar o jornal, na maioria das vezes você só precisa mexer em
`assets/js/conteudo.js`.** Abra com o Bloco de Notas, o VS Code ou qualquer editor de texto.

### Por que o cabeçalho e o rodapé não estão no HTML?

O menu, o cabeçalho e o rodapé são iguais nas 9 páginas. Se estivessem escritos em
cada arquivo, qualquer mudança teria de ser feita 9 vezes. Por isso eles ficam em
**`assets/js/layout.js`**: muda-se ali, uma vez só, e todas as páginas mudam junto.

Nas páginas você vê apenas dois marcadores, que o `layout.js` preenche sozinho:

```html
<div id="topo-do-site"></div>      <!-- vira a tarja, o cabeçalho e o menu -->
<div id="rodape-do-site"></div>    <!-- vira o rodapé e as janelas -->
```

### O título de cada página

Fica na primeira linha do `<body>` de cada arquivo. Para mudar o texto da faixa
verde do alto, basta editar ali:

```html
<body data-pagina="noticias"
      data-olho="📰 Editorias"
      data-titulo="Notícias"
      data-subtitulo="Reportagens produzidas pelas alunas do CBNB.">
```

O `data-pagina` é o que faz o item certo do menu ficar destacado.

### Criar uma página nova

1. Copie um arquivo parecido (por exemplo `eventos.html`) e dê outro nome.
2. Troque o `data-pagina`, o `data-titulo` e o conteúdo do `<main>`.
3. Abra `assets/js/layout.js` e acrescente uma linha na lista `MENU`:

```js
{ id: "esportes", nome: "Esportes", arquivo: "esportes.html" },
```

O link aparece automaticamente no menu e no rodapé de todas as páginas.

---

## 3. Como editar o conteúdo

Abra `assets/js/conteudo.js`. O arquivo está dividido em 13 partes numeradas e comentadas:

| Parte | O que controla |
|-------|----------------|
| 1. `EDICAO` | Nome, data e número da edição (topo, banner e rodapé) |
| 2. `PLATAFORMA` | **O link da plataforma da escola** (botão verde do topo) |
| 3. `PALAVRA_SEMANA` | **O versículo da semana** (bloco verde em destaque) |
| 4. `CATEGORIAS` | As editorias das notícias |
| 5. `DESTAQUE_EDICAO` | A matéria de capa |
| 6. `NOTICIAS` | Todas as reportagens |
| 7. `AGENDA` | Datas e eventos da Agenda CBNB |
| 8. `ENTREVISTA` | A entrevista da edição |
| 9. `DEPOIMENTOS` | A seção "Voz da Equipe" |
| 10. `FUNCOES` | Os cards de "Feito por Nós" |
| 11. `GALERIA` | As fotos e suas legendas |
| 12. `OPINIOES` | Os textos de "A Voz do CBNB" |
| 13. `CURIOSIDADES` | A seção "Você Sabia?" |
| 14. `SOBRE` | O texto "Sobre o CBNB News" |
| 15. `CREDITOS` | A página "Quem fez este site" |
| 16. `ESCOLA` | A seção "Escola" |

### Regras para não quebrar nada

1. Troque **apenas o que está entre aspas** `"assim"`.
2. Não apague as vírgulas `,` do fim das linhas.
3. Cada item começa com `{` e termina com `}` — mantenha os dois.
4. Salve o arquivo e atualize a página no navegador (**F5**).

### Exemplo: publicar uma notícia nova

Copie um bloco inteiro dentro de `NOTICIAS` e cole logo abaixo, trocando os textos:

```js
{
  id: "n11",                                   // precisa ser diferente dos outros
  titulo: "Título da notícia",
  categoria: "vida-escolar",                   // veja os ids em CATEGORIAS
  data: "20 de outubro de 2026",
  autoria: "Nome da equipe ou da aluna",
  imagem: "img/web/13.jpg",                    // caminho da foto
  resumo: "Um resumo curto, de uma ou duas linhas.",
  destaqueSemana: true,                        // true = aparece nos Destaques da Semana
  texto: [
    "Primeiro parágrafo da matéria.",
    "Segundo parágrafo da matéria."
  ]
},
```

### Exemplo: adicionar uma data na Agenda

Dentro de `AGENDA`, copie uma linha e cole no fim da lista:

```js
{ dia: "30", mes: "OUT", ano: "2026", titulo: "Nome do evento", tipo: "cultural", descricao: "Uma frase explicando o evento." },
```

Os valores possíveis de `tipo` (mudam só a cor da etiqueta) são:
`publicacao`, `cultural`, `esportivo`, `projeto`, `entrevista` e `especial`.

---

## 3a. Trocar o versículo da semana

O bloco verde com o versículo aparece na **página inicial** e no alto da página de
**notícias**. Para trocar, abra `assets/js/conteudo.js` e edite `PALAVRA_SEMANA`:

```js
const PALAVRA_SEMANA = {
  tema: "Direção",
  versiculo: "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.",
  referencia: "Salmos 119:105",
  reflexao: "Começar o dia com a Palavra é como acender uma luz antes de sair de casa..."
};
```

- `tema` — a palavra-chave da semana (aparece como etiqueta).
- `versiculo` — o texto do versículo, **sem** as aspas (o site coloca sozinho).
- `referencia` — livro, capítulo e versículo.
- `reflexao` — um parágrafo curto. Se deixar vazio (`""`), ele some do bloco.

---

## 3b. O link da plataforma  ⚠️ FALTA PREENCHER

O site já tem um **botão verde no topo**, um **atalho no rodapé** e uma **faixa na
página inicial** apontando para a plataforma da escola. Falta apenas o endereço.

Abra `assets/js/conteudo.js`, procure `PLATAFORMA` e troque o `#`:

```js
const PLATAFORMA = {
  nome: "Plataforma CBNB",
  url: "#",                    // ← cole aqui o endereço, ex.: "https://..."
  descricao: "Acesse a plataforma do Colégio Batista Nova Betânia: materiais, atividades e comunicados.",
  textoBotao: "Ir para a plataforma",
  abrirEmNovaAba: true
};
```

Enquanto o campo estiver com `#`:

- o botão do topo e o link do rodapé **ficam escondidos** (para ninguém clicar em um link vazio);
- a faixa da página inicial mostra um aviso lembrando o que falta.

Assim que o endereço for colado, os três aparecem sozinhos.

---

## 4. As fotos

O site já usa **fotos reais do colégio**, que estavam na pasta `img/`.

### Duas pastas de fotos

| Pasta | O que é |
|---|---|
| `img/` | As fotos **originais**, em tamanho grande (PNG). Não foram alteradas. |
| `img/web/` | Cópias **reduzidas para a internet** (JPG). São estas que o site usa. |

As originais somadas pesavam 7,4 MB; as cópias da web pesam 2,9 MB. Isso faz o site
abrir bem mais rápido no celular, principalmente com dados móveis.

### Trocar a foto de uma notícia

No `conteudo.js`, mude o caminho da imagem:

```js
imagem: "img/web/16.jpg"   →   imagem: "img/web/13.jpg"
```

### Usar uma foto nova

1. Coloque a foto na pasta `img/`.
2. No `conteudo.js`, aponte para ela: `imagem: "img/nome-da-foto.jpg"`.

Funciona direto. Se a foto for muito grande (acima de 1 MB), vale reduzir antes —
qualquer editor de imagens ou site de compressão resolve. O ideal é largura de
**1200 pixels** e formato **JPG**.

> **Dica de enquadramento:** as fotos são cortadas para caber nos cards. O corte
> pega a parte central, um pouco acima do meio, para não cortar os rostos.
> Fotos na horizontal funcionam melhor nos cards; as verticais ficam ótimas na galeria.

### Onde cada foto está sendo usada

- **Capa da edição:** `9.jpg`
- **Notícias:** `16`, `22`, `26`, `21`, `10`, `17`, `24`, `14`, `20`, `11`
- **Entrevista:** `12.jpg`
- **Galeria:** `10`, `233`, `13`, `15`, `26`, `5`, `19`, `18`, `23`, `7`, `25`, `4`

> ⚠️ **Atenção com a foto da entrevista.** A imagem mostra pessoas reais da escola,
> mas as perguntas e respostas ainda são um exemplo fictício. Por isso o site exibe
> um aviso embaixo da foto. Quando a entrevista real for publicada, apague a linha
> `avisoFoto` em `ENTREVISTA`, no arquivo `conteudo.js`.

> As imagens provisórias em `assets/img/*.svg` continuam na pasta como reserva,
> mas não são mais usadas. Podem ser apagadas sem problema.

---

## 5. Nomes dos estudantes

Por escolha da equipe e por cuidado com a privacidade, **o site não publica nomes**.
As identificações usadas são sempre por função ou turma:

- Em `FUNCOES`, aparecem só as sete funções (Redação, Fotografia, Entrevistas,
  Pesquisa, Design, Revisão e Redes sociais) — sem responsáveis.
- Em `DEPOIMENTOS`, cada relato é assinado como "Equipe de ...".
- Em `OPINIOES`, o campo `autora` traz a turma: "Estudante do 9º ano".
- Em `ENTREVISTA`, o campo `nome` está como `[Nome do entrevistado]`.

Se um dia a escola autorizar a publicação de nomes, é só preencher esses campos.

---

## 6. Como mudar as cores

Abra `assets/css/estilo.css`. No começo do arquivo, na seção **01. VARIÁVEIS**,
estão todos os tons de verde. Trocando o valor ali, o site inteiro muda junto:

```css
--verde-600: #14764d;   /* verde principal (botões, destaques) */
--verde-800: #0d3b2e;   /* verde escuro (títulos) */
```

---

## 7. O que já funciona no site

- **9 páginas**, uma para cada item do menu, com cabeçalho e rodapé compartilhados
- **Palavra da Semana** com versículo bíblico em destaque
- Cabeçalho fixo com menu e **busca** (também abre com `Ctrl + K`)
- O item do menu correspondente à página aberta fica destacado
- Faixa verde de título, com o caminho de navegação (Início › Notícias)
- Menu lateral no celular
- **Destaques da Semana** e **Destaque da Edição**
- **Notícias** com filtro por editoria e botão "Carregar mais"
- Janela de leitura da matéria completa ao clicar em "Leia mais"
- **Agenda CBNB** preparada para receber novas datas
- **Entrevista da Edição** e **Voz das Alunas**
- **Feito por Elas** com as sete funções da equipe
- **Galeria** com filtros e visualizador de fotos (navega com as setas do teclado)
- **A Voz do CBNB**, **Você Sabia?**, **Sobre** e rodapé completo
- A busca funciona em qualquer página e abre a matéria na hora
- Funciona em celular, tablet e computador
- Também imprime bem, caso a edição seja impressa

---

## 8. Observações técnicas

- O site é montado pelo navegador a partir do `conteudo.js`, então **o JavaScript
  precisa estar ativado**. Em navegadores atuais, já vem ativado por padrão.
- As fontes (Poppins e Inter) vêm da internet. Sem conexão, o navegador usa uma
  fonte parecida do próprio computador e o site continua funcionando.
- A pasta `.claude/` guarda apenas a configuração usada para testar o site localmente;
  ela não interfere no funcionamento e pode ser ignorada.

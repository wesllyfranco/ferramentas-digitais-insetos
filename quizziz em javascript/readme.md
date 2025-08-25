# 📘 Tutorial Quiz dos Insetos

Bem-vindo(a) ao tutorial! Neste guia, vamos ensinar como criar um jogo
de Quiz interativo sobre insetos. O projeto é ideal para quem não tem
muita experiência com programação e quer aprender a utilizar HTML, CSS e
JavaScript. Vamos construir o quiz do zero, criando uma experiência de
aprendizado divertida para seus alunos!

Tecnologias Usadas

-   HTML (index.html): Define a estrutura da página.
-   CSS (style.css): Define o visual e o layout do quiz.
-   JavaScript (.js): Dá vida ao quiz, tornando-o interativo e
    funcional.

------------------------------------------------------------------------

📂 Estrutura de Arquivos

Para começar, crie uma pasta para o projeto, como QuizInsetos, e dentro
dela, crie os seguintes arquivos:

    QuizInsetos/
    ├── index.html
    ├── style.css
    ├── script.js
    ├── perguntas.js
    ├── aleatorio.js
    └── LICENSE

------------------------------------------------------------------------

---

## 📝 Passo 1: A Estrutura do Jogo (HTML)

O arquivo `index.html` define todos os elementos visíveis na página: o título, os textos e os espaços onde as perguntas e resultados aparecerão.
<details>
<summary>Clique para ver o código completo de <code>index.html</code></summary>

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Insetologia</title>
</head>
<body>
    <div class="caixa-principal">
        <h1>O que você sabe sobre os insetos?</h1>
        <div class="tela-inicial">
            <p>Bem-vindo ao Quiz dos Insetos! Prepare-se para mergulhar no fascinante mundo desses pequenos seres...</p>
            <button class="iniciar-btn">Iniciar</button>
        </div>
        <div class="caixa-perguntas"></div>
        <div class="caixa-alternativas"></div>
        <div class="caixa-resultado">
            <p class="texto-resultado"></p>
            <button class="novamente-btn">Jogar Novamente</button>
        </div>
    </div>
    <script type="module" src="js/aleatorio.js"></script>
    <script type="module" src="js/perguntas.js"></script>
    <script type="module" src="js/script.js"></script>
</body>
</html>
```
</details>
O que esse código faz?

-   Cria a estrutura básica da página.
-   Define seções para introdução, perguntas, alternativas e resultados.
-   No final do <body>, inclui os scripts JavaScript necessários para
    dar interatividade à página.

------------------------------------------------------------------------

## 🎨 Passo 2: Deixando o Jogo Bonito (CSS)

O arquivo style.css é responsável pela aparência do nosso quiz. Ele
define cores, fontes, espaçamentos e o layout dos elementos.

<details>
<summary>Clique para ver o código completo de <code>style.css</code></summary>

    @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    :root{
        --cor-fundo: #d6f3e6;
        --cor-principal: #97b884;
        --cor-secundaria: #212333;
        --cor-destaque: #546459;
        --cor-texto: #eeffd7;
    }

    body {
        background-color: var(--cor-fundo);
        color: var(--cor-texto);
        font-family: 'Inter', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    .caixa-principal{
        background-color: var(--cor-principal);
        width: 90%;
        max-width: 600px;
        text-align: center;
        padding: 20px;
    }

    h1, .caixa-perguntas, .caixa-resultado{
        font-family: 'Chakra Petch', sans-serif;
    }

    h1{
        color: var(--cor-destaque);
    }

    button {
        background-color: var(--cor-secundaria);
        color: var(--cor-texto);
        border: none;
        border-radius: 15px;
        padding: 15px;
        transition: background-color 0.3s;
    }

    button:hover{
        background-color: var(--cor-destaque);
        color: var(--cor-principal);
    }

    .caixa-alternativas {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .caixa-resultado {
        display: none;
    }

    .caixa-resultado.mostrar {
        display: block;
    }
</details>
Destaques do Estilo:

-   @import: Importa fontes do Google Fonts para dar um toque especial
    ao design.
-   :root: Define variáveis de cores que tornam a personalização fácil.
-   button:hover: Cria um efeito interativo que altera a cor do botão
    quando o mouse passa por cima.

------------------------------------------------------------------------

## 🤖 Passo 3: Criando as Perguntas (JavaScript)

O arquivo perguntas.js contém o conteúdo do quiz. É uma lista de
objetos, onde cada objeto representa uma pergunta com suas alternativas.

<details> <summary>Clique para ver o código completo de <code>perguntas.js</code></summary>

    
 ```js
export const perguntas = [
    {
        enunciado: "Qual destes insetos é conhecido por sua incrível força?",
        alternativas: [
            {
                texto: "Besouro-rinoceronte",
                afirmacao: ["Você descobriu que o besouro-rinoceronte pode carregar até 850 vezes o seu peso!"],
                proxima: 1
            },
            {
                texto: "Formiga-de-fogo",
                afirmacao: ["Elas são fortes, mas o título vai para outro inseto."],
                proxima: 1
            }
        ]
    },
    {
        enunciado: "Qual inseto é essencial para a polinização de diversas plantas?",
        alternativas: [
            {
                texto: "Abelha",
                afirmacao: ["Você acertou! As abelhas são polinizadores fundamentais."],
                proxima: 2
            },
            {
                texto: "Mosquito",
                afirmacao: ["Não dessa vez... Os mosquitos têm outro papel ecológico."],
                proxima: 2
            }
        ]
    }
];
```
</details>
Entendendo a Estrutura:

-   enunciado: O texto da pergunta.
-   alternativas: Lista com opções de resposta.
-   texto: O texto de cada alternativa.
-   afirmacao: Feedback dado após escolher a alternativa.
-   proxima: Índice da próxima pergunta.

------------------------------------------------------------------------

## 🍀 Passo 4: Adicionando Sorte ao Jogo (JavaScript)

O arquivo aleatorio.js contém uma função simples para sortear um nome da
lista, tornando o jogo mais personalizado. Assim o resumo das respostas sempre terá um nome de jogador aleatório

<details> <summary>Clique para ver o código completo de <code>aleatorio.js</code></summary>

 ```js   
    const nomes = ["Juca", "Margarida", "Alfredo", "Deolane", "Catra", "Pipokinha"];

    export function aleatorio (lista){
        const posicao = Math.floor(Math.random() * lista.length);
        return lista[posicao];
    }

    export const nome = aleatorio(nomes);
```

</details>
------------------------------------------------------------------------

## 🧠 Passo 5: A Inteligência do Jogo (JavaScript)

O arquivo script.js conecta tudo: ele controla o fluxo do jogo, exibe as
perguntas e processa as respostas. É o coração do jogo

<details> <summary>Clique para ver o código completo de <code>script.js</code></summary>

    ```js
    
    import { aleatorio, nome } from './aleatorio.js';
    import { perguntas } from './perguntas.js';

    const caixaPrincipal = document.querySelector(".caixa-principal");
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".novamente-btn");
    const botaoIniciar = document.querySelector(".iniciar-btn");
    const telaInicial = document.querySelector(".tela-inicial");

    let atual = 0; 
    let perguntaAtual;
    let historiaFinal = "";

    botaoIniciar.addEventListener('click', iniciaJogo);

    function iniciaJogo() {
        atual = 0;
        historiaFinal = "";
        telaInicial.style.display = 'none';
        caixaPerguntas.classList.remove("mostrar");
        caixaAlternativas.classList.remove("mostrar");
        caixaResultado.classList.remove("mostrar");
        mostraPergunta();
    }

    function mostraPergunta() {
        if(atual >= perguntas.length){
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
    }

    function mostraAlternativas(){
        for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener('click', () => processaResposta(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    function processaResposta(alternativa){
        historiaFinal += alternativa.afirmacao.join(' ');
        atual = alternativa.proxima;
        mostraPergunta();
    }

    function mostraResultado() {
        caixaResultado.classList.add("mostrar");
        textoResultado.textContent = historiaFinal || "Você terminou o quiz! Parabéns!";
        botaoJogarNovamente.style.display = 'block';
    }

    botaoJogarNovamente.addEventListener('click', iniciaJogo);
    
```

</details>

Tutorial: Criando um Quiz Interativo sobre Insetos
Bem-vindo(a), professor(a)! Este é um guia passo a passo para construir um jogo de Quiz interativo do zero, pensado para quem não tem muito conhecimento em programação. Vamos usar tecnologias básicas da web para criar uma experiência de aprendizado divertida para seus alunos.

Imagine que estamos construindo uma casa:

HTML (index.html): É a estrutura (paredes, teto, portas).

CSS (style.css): É a decoração (cores, fontes, layout).

JavaScript (.js): É a eletricidade e a automação (o que dá vida e funcionalidade ao jogo).

📂 Estrutura de Arquivos
Para começar, crie uma pasta principal para o projeto (ex: QuizInsetos) e, dentro dela, crie os seguintes arquivos:

QuizInsetos/
├── index.html
├── style.css
├── script.js
├── perguntas.js
├── aleatorio.js
└── LICENSE
Passo 1: A Estrutura do Jogo (HTML)
O arquivo index.html define todos os elementos visíveis na página: o título, os textos e os espaços onde as perguntas e resultados aparecerão.

<details>
<summary>Clique para ver o código completo de <code>index.html</code></summary>

HTML

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
            <p>Bem-vindo ao Quiz dos Insetos! 
                Prepare-se para mergulhar no fascinante mundo desses pequenos seres que desempenham papéis essenciais no equilíbrio da natureza. 
                Você será desafiado a responder perguntas sobre o comportamento, a anatomia e a importância dos insetos no ecossistema. 
                Teste seus conhecimentos e descubra curiosidades surpreendentes sobre formigas, borboletas, libélulas e muito mais. 
                Boa sorte e que comece a aventura no mundo dos insetos!
            </p>
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
</details>

🔍 O que esse código faz?

Cria os elementos visuais básicos, como o título principal (<h1>).

Define "caixas" (<div>) vazias que serão preenchidas dinamicamente pelo JavaScript:

.tela-inicial: Mostra a introdução e o botão "Iniciar".

.caixa-perguntas: Onde o texto da pergunta aparecerá.

.caixa-alternativas: Onde os botões de resposta serão criados.

.caixa-resultado: Onde o resultado final é exibido.

No final do <body>, ele "chama" os arquivos JavaScript, que darão vida à página. O type="module" permite que os arquivos js importem funcionalidades uns dos outros.

Passo 2: Deixando o Jogo Bonito (CSS)
O arquivo style.css é responsável pela aparência do nosso quiz. Ele define cores, fontes, espaçamentos e o layout dos elementos.

<details>
<summary>Clique para ver o código completo de <code>style.css</code></summary>

CSS

@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

:root{
    --cor-fundo: #d6f3e6;
    --cor-principal: #97b884 ;
    --cor-secundaria: #212333; 
    --cor-destaque: #546459;
    --cor-texto: #eeffd7;

}

body {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
    font-family: 'Inter', sans-serif; /*add 11/09*/
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
/*add 11/09*/
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

🎨 Destaques do Estilo:

@import url(...): Importa fontes customizadas do Google Fonts para deixar o visual mais interessante.

:root: Define "variáveis" de cores (ex: --cor-fundo). Isso é muito útil! Se quiser mudar o tema do jogo, basta alterar as cores aqui e todo o site será atualizado.

button:hover: Cria um efeito visual que muda a cor do botão quando o mouse passa por cima, melhorando a interatividade.

Passo 3: Criando as Perguntas (JavaScript)
No arquivo perguntas.js, criamos o conteúdo do quiz. É uma lista de objetos, onde cada objeto representa uma pergunta e suas alternativas.

perguntas.js

JavaScript

export const perguntas = [
    {
        enunciado: "Você quer descobrir qual é a função principal dos insetos polinizadores no ecossistema?",
        alternativas: [
            {
                texto: "Dispersar sementes",
                afirmacao: [
                    "Na verdade, o papel da dispersão é mais comum em outros animais, como aves e mamíferos."
                ],
                proxima: 1,  // Direciona para a pergunta 2
            },
            {
                texto: "Polinizar plantas",
                afirmacao: [
                    "A polinização é essencial para a produção de frutos e sementes, mantendo a biodiversidade."
                ],
                proxima: 1,  // Direciona para a pergunta 2
            },
        ]
    },
    // ... Adicione mais perguntas aqui
];
🔍 Entendendo a Estrutura:

enunciado: O texto da pergunta.

alternativas: Uma lista contendo as opções de resposta.

texto: O texto que aparece no botão de cada alternativa.

afirmacao: O feedback ou a parte da "história" que é salva quando o jogador escolhe essa opção.

proxima: O índice da próxima pergunta na lista. Lembre-se que a contagem começa em 0!

Passo 4: Adicionando Sorte ao Jogo (JavaScript)
O arquivo aleatorio.js tem uma função simples para sortear um nome de uma lista, tornando o jogo mais personalizado e divertido.

aleatorio.js

JavaScript

const nomes = ["Juca", "Margarida", "Alfredo", "Deolane", "Catra", "Pipokinha"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
A função aleatorio pega uma lista qualquer e retorna um item aleatório dela.

A variável nome já armazena um nome sorteado da lista nomes para ser usado no jogo.

Passo 5: A Inteligência do Jogo (JavaScript)
Este é o cérebro do nosso projeto. O script.js conecta todos os outros arquivos, controla o fluxo do jogo, exibe as perguntas e processa as respostas.

<details>
<summary>Clique para ver o código completo de <code>script.js</code></summary>

JavaScript

import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from './perguntas.js';

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
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
   if(opcaoSelecionada.proxima !== undefined) {
       atual = opcaoSelecionada.proxima;
   }else {
       mostraResultado();
       return;
   }
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = `Após os estudos, ${nome} descobriu que`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar"); 
    botaoJogarNovamente.addEventListener("click", jogarNovamente); 
}

function jogarNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar"); 
    mostraPergunta();
}

function substituiNome() {
    for(const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
substituiNome();
</details>

🧠 Como a lógica funciona:

import: O script começa importando as perguntas e o nome sorteado dos outros arquivos.

const ... = document.querySelector(...): Conecta as variáveis do JavaScript com os elementos do HTML.

iniciaJogo(): É chamada pelo botão "Iniciar". Ela esconde a tela inicial e chama a função mostraPergunta().

mostraPergunta(): Exibe a pergunta atual. Se as perguntas tiverem acabado, ela chama mostraResultado().

mostraAlternativas(): Cria os botões de resposta para a pergunta atual. A cada botão é adicionado um "escutador" (addEventListener) que espera por um clique.

respostaSelecionada(opcao): Quando um botão é clicado, esta função adiciona a afirmacao correspondente à historiaFinal e avança para a próxima pergunta.

mostraResultado(): Ao final do jogo, exibe a caixaResultado com a história que foi montada com base nas respostas.

🚀 Como Executar o Jogo
É muito simples! Depois de criar todos os arquivos, basta abrir o index.html no seu navegador de preferência (como Google Chrome ou Mozilla Firefox).

🎨 Como Personalizar
Mudar as perguntas: Edite o arquivo perguntas.js. Você pode criar um quiz sobre qualquer tema!

Alterar o visual: Modifique as cores na seção :root do arquivo style.css para criar um novo tema.

Adicionar nomes: Insira novos nomes na lista nomes dentro do arquivo aleatorio.js.



// Definindo os pares de cartas do jogo
const pares = [
  { nome: "Abelha", info: "Hymenoptera" },
  { nome: "Joaninha", info: "Coleoptera" },
  { nome: "Borboleta", info: "Lepidoptera" },
  { nome: "Mosquito", info: "Diptera" }
];

// Criando as cartas no jogo, com nome e classificação
let cartas = [];
pares.forEach(par => {
  cartas.push({ texto: par.nome, id: par.nome });
  cartas.push({ texto: par.info, id: par.nome });
});

// Embaralhando as cartas
cartas = cartas.sort(() => 0.5 - Math.random());

// Acessando o tabuleiro do jogo e as variáveis para cartas viradas
const tabuleiro = document.getElementById('game-board');
let cartasViradas = [];
let cartasCorretas = [];

// Função que cria o tabuleiro de cartas
function criarTabuleiro() {
  cartas.forEach((carta, indice) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.setAttribute('data-id', carta.id);
    div.setAttribute('data-indice', indice);
    div.innerText = "?";
    div.addEventListener('click', virarCarta);
    tabuleiro.appendChild(div);
  });
}

// Função que vira uma carta quando clicada
function virarCarta() {
  if (cartasViradas.length === 2) return;  // Não permite virar mais de 2 cartas ao mesmo tempo

  const carta = this;
  const indice = carta.getAttribute('data-indice');
  const dados = cartas[indice];

  if (carta.classList.contains('flipped') || cartasCorretas.includes(indice)) return;  // Ignora cartas já viradas ou corretas

  carta.innerText = dados.texto;  // Mostra o texto da carta virada
  carta.classList.add('flipped');  // Marca a carta como virada
  cartasViradas.push({ indice, id: dados.id });

  if (cartasViradas.length === 2) {
    verificarPar();  // Verifica se as duas cartas viradas formam um par
  }
}

// Função que verifica se as duas cartas viradas são um par
function verificarPar() {
  const [carta1, carta2] = cartasViradas;

  if (carta1.id === carta2.id && carta1.indice !== carta2.indice) {
    cartasCorretas.push(carta1.indice, carta2.indice);  // Adiciona as cartas corretas
    document.getElementById('status').innerText = "Você acertou um par!";
  } else {
    setTimeout(() => {
      const elementos = document.querySelectorAll('.card');
      elementos[carta1.indice].innerText = "?";
      elementos[carta2.indice].innerText = "?";
      elementos[carta1.indice].classList.remove('flipped');
      elementos[carta2.indice].classList.remove('flipped');
    }, 800);
    document.getElementById('status').innerText = "Tente novamente!";
  }

  cartasViradas = [];  // Reseta as cartas viradas

  // Se todas as cartas forem emparelhadas, o jogo acaba
  if (cartasCorretas.length === cartas.length) {
    document.getElementById('status').innerText = "Parabéns! Você completou o jogo!";
  }
}

// Inicia o jogo criando o tabuleiro
criarTabuleiro();


# Tutorial: Crie seu próprio Jogo da Memória - Insetos

Este tutorial ajudará você a criar seu próprio jogo da memória com o tema "Insetos", usando HTML, CSS e JavaScript.

## Objetivo
Criar um jogo educativo da memória digital onde os pares são formados por nomes de insetos e suas classificações científicas.

## Estrutura de Arquivos

Crie os seguintes arquivos no seu projeto:

- `index.html` → estrutura do site
- `style.css` → estilos visuais do jogo
- `script.js` → lógica do jogo

Coloque os três arquivos na mesma pasta.

## 1. Código HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Jogo da Memória - Insetos</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Jogo da Memória: Insetos</h1>
  <div id="game-board"></div>
  <p id="status"></p>
  <script src="script.js"></script>
</body>
</html>
```

## 2. Código CSS (`style.css`)

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f5f5f5;
}

h1 {
  margin-top: 20px;
  color: #333;
}

#game-board {
  display: grid;
  grid-template-columns: repeat(4, 120px);
  gap: 15px;
  justify-content: center;
  margin: 30px auto;
  max-width: 600px;
}

.card {
  width: 120px;
  height: 120px;
  background-color: #1c6dd0;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
}

.card.flipped {
  background-color: #fff;
  color: #000;
  border: 2px solid #1c6dd0;
}
```

## 3. Código JavaScript (`script.js`)

```javascript
const pares = [
  { nome: "Abelha", info: "Hymenoptera" },
  { nome: "Joaninha", info: "Coleoptera" },
  { nome: "Borboleta", info: "Lepidoptera" },
  { nome: "Mosquito", info: "Diptera" }
];

let cartas = [];
pares.forEach(par => {
  cartas.push({ texto: par.nome, id: par.nome });
  cartas.push({ texto: par.info, id: par.nome });
});

cartas = cartas.sort(() => 0.5 - Math.random());

const tabuleiro = document.getElementById('game-board');
let cartasViradas = [];
let cartasCorretas = [];

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

function virarCarta() {
  if (cartasViradas.length === 2) return;

  const carta = this;
  const indice = carta.getAttribute('data-indice');
  const dados = cartas[indice];

  if (carta.classList.contains('flipped') || cartasCorretas.includes(indice)) return;

  carta.innerText = dados.texto;
  carta.classList.add('flipped');
  cartasViradas.push({ indice, id: dados.id });

  if (cartasViradas.length === 2) verificarPar();
}

function verificarPar() {
  const [carta1, carta2] = cartasViradas;

  if (carta1.id === carta2.id && carta1.indice !== carta2.indice) {
    cartasCorretas.push(carta1.indice, carta2.indice);
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

  cartasViradas = [];

  if (cartasCorretas.length === cartas.length) {
    document.getElementById('status').innerText = "Parabéns! Você completou o jogo!";
  }
}

criarTabuleiro();
```

## Como Testar

1. Salve os três arquivos na mesma pasta.
2. Dê um duplo clique no arquivo `index.html` para abrir no navegador.
3. Jogue e divirta-se!

Você pode alterar os nomes e classificações dos insetos para personalizar o jogo.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub com esses arquivos.
2. Vá em **Settings > Pages**.
3. Em "Source", selecione a branch principal e clique em "Save".
4. Seu jogo estará disponível online em alguns segundos!

## Bom aprendizado e divirta-se programando!

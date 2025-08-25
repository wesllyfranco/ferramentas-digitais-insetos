# Ferramentas digitais para o ensino de insetos

Esse repositório apresenta um banco de dados e material complementar para o capítulo RECURSOS E FERRAMENTAS DIGITAIS PARA O ENSINO DE INSETOS

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfólio de Projetos</title>
  <style>
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background: #f4f4f9;
  color: #333;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Cabeçalho */
header {
  text-align: center;
  padding: 2rem 1rem;
  background: #4a90e2;
  color: white;
}

header h1 {
  margin-bottom: 0.5rem;
}

/* Grid de projetos */
.grid {
  display: grid;
  gap: 1.5rem;
  padding: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

/* Card */
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

.card h2 {
  margin-bottom: 0.5rem;
  color: #4a90e2;
}

/* Rodapé */
footer {
  text-align: center;
  padding: 1rem;
  margin-top: auto;
  background: #eee;
  font-size: 0.9rem;
}

  </style>
</head>
<body>
  <header>
    <h1>🌐 Meu Portfólio</h1>
    <p>Selecione um dos projetos abaixo para visualizar</p>
  </header>

  <main class="grid">
    <a href="projetos/quiz-insetos/index.html" class="card" target="_blank">
      <h2>🐜 Quiz dos Insetos</h2>
      <p>Um quiz interativo sobre biologia e insetos.</p>
    </a>

    <a href="projetos/site-sustentabilidade/index.html" class="card" target="_blank">
      <h2>🌱 Sustentabilidade</h2>
      <p>Site educativo sobre práticas sustentáveis.</p>
    </a>

    <a href="projetos/outro-site/index.html" class="card" target="_blank">
      <h2>✨ Outro Projeto</h2>
      <p>Exemplo adicional de site criado.</p>
    </a>
  </main>

  <footer>
    <p>Feito com ❤️ por Weslly | Hospedado no GitHub Pages</p>
  </footer>
</body>
</html>

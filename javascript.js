// Aguarda o carregamento completo da página antes de executar o script
document.addEventListener("DOMContentLoaded", () => {

  // --- QUIZ ---
  const btnResponder = document.getElementById("responder");
  const feedback = document.getElementById("quiz-feedback");

  btnResponder.addEventListener("click", () => {
    const resposta = document.querySelector('input[name="answer"]:checked');

    if (!resposta) {
      feedback.textContent = "⚠️ Por favor, selecione uma alternativa!";
      feedback.style.color = "red";
      return;
    }

    if (resposta.value === "agricolas") {
      feedback.textContent = "✅ Correto! As cinzas se transformaram em produtos agrícolas.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "❌ Resposta incorreta. Tente novamente!";
      feedback.style.color = "red";
    }
  });

  // --- COMENTÁRIOS ---
  const form = document.getElementById("comment-form");
  const comentariosDiv = document.getElementById("comentarios");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !mensagem) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Cria o elemento de comentário
    const div = document.createElement("div");
    div.classList.add("comentario");

    const data = new Date().toLocaleDateString("pt-BR");
    div.innerHTML = `<strong>${nome}</strong> <em>(${data})</em>:<br>${mensagem}`;

    // Adiciona o comentário no topo da lista
    comentariosDiv.prepend(div);

    // Limpa o formulário
    form.reset();
  });
});
// Aguarda o carregamento completo da página antes de executar o script
document.addEventListener("DOMContentLoaded", () => {

  // --- QUIZ ---
  const btnResponder = document.getElementById("responder");
  const feedback = document.getElementById("quiz-feedback");

  btnResponder.addEventListener("click", () => {
    const resposta = document.querySelector('input[name="answer"]:checked');

    if (!resposta) {
      feedback.textContent = "⚠️ Por favor, selecione uma alternativa!";
      feedback.style.color = "red";
      return;
    }

    if (resposta.value === "agricolas") {
      feedback.textContent = "✅ Correto! As cinzas se transformaram em produtos agrícolas.";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "❌ Resposta incorreta. Tente novamente!";
      feedback.style.color = "red";
    }
  });

  // --- COMENTÁRIOS ---
  const form = document.getElementById("comment-form");
  const comentariosDiv = document.getElementById("comentarios");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !mensagem) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Cria o elemento de comentário
    const div = document.createElement("div");
    div.classList.add("comentario");

    const data = new Date().toLocaleDateString("pt-BR");
    div.innerHTML = `<strong>${nome}</strong> <em>(${data})</em>:<br>${mensagem}`;

    // Adiciona o comentário no topo da lista
    comentariosDiv.prepend(div);

    // Limpa o formulário
    form.reset();
  });
});

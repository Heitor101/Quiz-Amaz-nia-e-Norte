// Aguarda o carregamento completo da página antes de executar o script
document.addEventListener("DOMContentLoaded", () => {

  // --- QUIZ DE 15 PERGUNTAS ---
  const btnEnviar = document.getElementById("enviar");
  const resultado = document.getElementById("resultado");

  btnEnviar.addEventListener("click", () => {
    const respostasCertas = {
      q1: "Amazonas",
      q2: "Amazonas",
      q3: "encanta",
      q4: "Amazônia",
      q5: "rios",
      q6: "Belém",
      q7: "palmeira",
      q8: "Rio Branco",
      q9: "Borracha",
      q10: "Roraima",
      q11: "Onça-pintada",
      q12: "Venezuela",
      q13: "floresta",
      q14: "Manaus",
      q15: "Equatorial úmido"
    };

    let pontos = 0;
    const total = 15;

    for (let i = 1; i <= total; i++) {
      const resposta = document.querySelector(`input[name="q${i}"]:checked`);
      if (resposta && resposta.value === respostasCertas[`q${i}`]) {
        pontos++;
      }
    }

    resultado.innerHTML = `<strong>Você acertou ${pontos} de ${total} perguntas!</strong><br>
      ${pontos >= 12 ? "🌳 Excelente conhecimento da Amazônia!" :
       pontos >= 8 ? "🌿 Muito bom!" :
       "🍂 Continue aprendendo sobre o Norte do Brasil!"}`;
    resultado.style.color = pontos >= 8 ? "green" : "red";
  });

  // --- COMENTÁRIOS ---
  const form = document.getElementById("comment-form");
  const comentariosDiv = document.getElementById("comentarios");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !mensagem) {
      alert("⚠️ Por favor, preencha todos os campos!");
      return;
    }

    const div = document.createElement("div");
    div.classList.add("comentario");
    const data = new Date().toLocaleDateString("pt-BR");

    div.innerHTML = `<strong>${nome}</strong> <em>(${data})</em>:<br>${mensagem}`;

    comentariosDiv.prepend(div);
    form.reset();
  });

});      alert("Por favor, preencha todos os campos!");
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

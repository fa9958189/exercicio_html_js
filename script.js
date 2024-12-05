document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário
  
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);
    const mensagem = document.getElementById("mensagem");
  
    if (campoB > campoA) {
      mensagem.textContent = "O formulário é válido: Campo B é maior que Campo A.";
      mensagem.className = "mensagem positivo";
    } else {
      mensagem.textContent = "O formulário é inválido: Campo B deve ser maior que Campo A.";
      mensagem.className = "mensagem negativo";
    }
  });
  
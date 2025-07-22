const form = document.getElementById('serviceRequestForm');
const statusMsg = document.getElementById('statusMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  statusMsg.textContent = '';

  // Captura os dados
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const telefone = form.telefone.value.trim();
  const servico = form.servico.value;
  const descricao = form.descricao.value.trim();

  // Validação simples
  if (!nome || !email || !servico) {
    statusMsg.textContent = "❌ Preencha os campos obrigatórios.";
    return;
  }

  // Monta a URL com os parâmetros
  const baseURL = "https://script.google.com/macros/s/AKfycbxszNywWIvhEVY61iZX70rZihuk7fX35u5k7DM_SR_m5sDCcHkQApZSpa3BO13QrfRh/exec";
  const params = new URLSearchParams({
    nome,
    email,
    telefone,
    servico,
    descricao
  });

  statusMsg.textContent = "⏳ Enviando...";

  // Envia os dados via GET
  fetch(`${baseURL}?${params.toString()}`)
    .then(response => {
      if (response.ok) {
        statusMsg.textContent = "✅ Formulário enviado com sucesso!";
        form.reset();
      } else {
        statusMsg.textContent = "❌ Erro ao enviar. Tente novamente.";
      }
    })
    .catch(error => {
      console.error("Erro no envio:", error);
      statusMsg.textContent = "❌ Falha na conexão. Verifique sua internet.";
    });
});

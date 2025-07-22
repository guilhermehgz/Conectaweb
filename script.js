const form = document.getElementById('serviceRequestForm');
const statusMsg = document.getElementById('statusMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusMsg.textContent = '';

  // Validação básica
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const telefone = form.telefone.value.trim();
  const servico = form.servico.value;
  const descricao = form.descricao.value.trim();

  if (!nome || !email || !servico) {
    statusMsg.textContent = "❌ Preencha os campos obrigatórios.";
    return;
  }

  // Dados para enviar
  const data = { nome, email, telefone, servico, descricao };

  statusMsg.textContent = "⏳ Enviando...";

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbzRziDIX85b7CRi4kXvLPOIPxSTmdtxS9rwXJ0Inu-ejx_fXjwSmU-mstWqc0luW5RYkA/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      statusMsg.textContent = "✅ Formulário enviado com sucesso!";
      form.reset();
    } else {
      statusMsg.textContent = "❌ Erro ao enviar. Tente novamente.";
    }
  } catch (err) {
    console.error(err);
    statusMsg.textContent = "❌ Falha na conexão. Verifique sua internet.";
  }
});

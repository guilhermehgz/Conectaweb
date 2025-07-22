const form = document.getElementById('serviceRequestForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  // Limpa mensagens anteriores
  form.querySelectorAll('.error-message').forEach(span => span.textContent = '');

  // Valida campos obrigatórios
  const nome = form.nome;
  const email = form.email;
  const servico = form.servico;

  if (!nome.value.trim()) {
    form.nome.nextElementSibling.textContent = 'Por favor, preencha seu nome.';
    valid = false;
  }

  if (!email.value.trim() || !email.checkValidity()) {
    form.email.nextElementSibling.textContent = 'Digite um e-mail válido.';
    valid = false;
  }

  if (!servico.value) {
    form.servico.nextElementSibling.textContent = 'Selecione um tipo de serviço.';
    valid = false;
  }

  if (!valid) {
    formMessage.textContent = '';
    return;
  }

  // Aqui você pode adicionar a integração real, por exemplo, AJAX para enviar o formulário

  formMessage.style.color = 'green';
  formMessage.textContent = 'Solicitação enviada com sucesso! Em breve entraremos em contato.';
  form.reset();
});

document.getElementById("serviceRequestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: data
  })
  .then(response => response.text())
  .then(result => {
    const message = document.getElementById("formMessage");
    if (result.trim() === "ok") {
      message.textContent = "Solicitação enviada com sucesso!";
      form.reset();
    } else {
      message.textContent = "Erro ao enviar. Tente novamente.";
    }
  })
  .catch(() => {
    document.getElementById("formMessage").textContent = "Erro na conexão com o servidor.";
  });
});

const res = await fetch("https://script.google.com/macros/s/AKf.../exec", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(obj)
});

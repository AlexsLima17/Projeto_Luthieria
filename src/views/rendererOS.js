const foco = document.getElementById('searchClient');
const nameClient = document.getElementById('inputNameClient');
const phoneClient = document.getElementById('inputPhoneClient');
const idClient = document.getElementById('inputIdClient');

// Função para buscar cliente e preencher nome e telefone
function searchName() {
    let cliName = foco.value.trim();

    if (cliName === "") {
        alert("Digite um nome para buscar.");
        return;
    }

    api.searchName(cliName);

    api.renderClient((event, client) => {
        const clientData = JSON.parse(client);

        if (clientData.length === 0) {
            alert("Cliente não encontrado.");
            return;
        }

        // Pega o primeiro cliente encontrado
        const c = clientData[0];
        idClient.value = c._id;
        nameClient.value = c.nomeCliente;
        phoneClient.value = c.foneCliente;
    });
}

function salvarOS() {
  const osData = {
      idCliente: document.getElementById('inputIdClient').value,
      nomeCliente: document.getElementById('inputNameClient').value,
      telefoneCliente: document.getElementById('inputPhoneClient').value,
      instrumento: document.getElementById('instrumento').value,
      servico: document.getElementById('servicos').value,
      observacoes: document.getElementById('observacoes').value,
      entrada: document.getElementById('entrada').value,
      entrega: document.getElementById('entrega').value,
      valor: document.getElementById('valor').value,
      status: document.getElementById('status').value
  };

  // Validação simples
  if (!osData.nomeCliente || !osData.telefoneCliente) {
      alert("Preencha nome e telefone do cliente.");
      return;
  }

  // Envia para o banco via preload
  api.newOS(osData);

  alert("Ordem de Serviço salva com sucesso!");

  resetForm(); // Você pode resetar ou não, dependendo do fluxo
}

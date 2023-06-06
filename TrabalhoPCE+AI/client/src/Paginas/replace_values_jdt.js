function replace_values_jdt(composition) {
  let imagem_jdt = require('../jdt_imagem.json');
  let jdt = JSON.parse(JSON.stringify(imagem_jdt));

  // Paciente
  // Nome do paciente
  if (composition["items.0.2.items.0.items.0.value"]) {
    jdt.items[0][2].items[0].items[0].value = composition["items.0.2.items.0.items.0.value"];
  }
  // Género do paciente
  if (composition["items.0.2.items.0.items.1.value"]) {
    jdt.items[0][2].items[0].items[1].value = composition["items.0.2.items.0.items.1.value"];
  }
  // Número SNS
  if (composition["items.0.2.items.0.items.2.value"]) {
    jdt.items[0][2].items[0].items[2].value = composition["items.0.2.items.0.items.2.value"];
  }
  // Número SNS
  if (composition["items.0.2.items.0.items.3.items.0.value"]) {
    jdt.items[0][2].items[0].items[3].items[0].value = composition["items.0.2.items.0.items.3.items.0.value"][0].value;
  }

  // Procedimento
  // Categoria
  if (composition["items.0.3.items.0.value"]) {
    jdt.items[0][3].items[0].value = composition["items.0.3.items.0.value"];
  }
  // Status
  if (composition["items.0.3.items.1.value"]) {
    jdt.items[0][3].items[1].value = composition["items.0.3.items.1.value"];
  }
  // Método
  if (composition["items.0.3.items.2.value"]) {
    jdt.items[0][3].items[2].value = composition["items.0.3.items.2.value"];
  }

  // Profissional de Saúde
  // Função
  if (composition["items.0.3.items.3.items.0.value"]) {
    jdt.items[0][3].items[3].items[0].value = composition["items.0.3.items.3.items.0.value"][0].value;
  }
  // Identificador
  if (composition["items.0.3.items.3.items.1.value"]) {
    jdt.items[0][3].items[3].items[1].value = composition["items.0.3.items.3.items.1.value"];
  }

  // Instituição
  // Nome
  if (composition["items.0.3.items.4.items.0.value"]) {
    jdt.items[0][3].items[4].items[0].value = composition["items.0.3.items.4.items.0.value"];
  }
  // Identificador da Organização
  if (composition["items.0.3.items.4.items.1.value"]) {
    jdt.items[0][3].items[4].items[1].value = composition["items.0.3.items.4.items.1.value"];
  }
  // Conclusões
  if (composition["items.0.3.items.5.value"]) {
    jdt.items[0][3].items[5].value = composition["items.0.3.items.5.value"][0].value;
  }

  // Observações
  // Parte do Corpo
  if (composition["items.0.4.items.1.items.0.value"]) {
    jdt.items[0][4].items[1].items[0].value = composition["items.0.4.items.1.items.0.value"];
  }
  // Interpretação
  if (composition["items.0.4.items.1.items.1.value"]) {
    jdt.items[0][4].items[1].items[1].value = composition["items.0.4.items.1.items.1.value"];
  }
  // Valor
  if (composition["items.0.4.items.1.items.2.value"]) {
    jdt.items[0][4].items[1].items[2].value = composition["items.0.4.items.1.items.2.value"];
  }
  // Unidades de medida
  if (composition["items.0.4.items.1.items.3.value"]) {
    jdt.items[0][4].items[1].items[3].value = composition["items.0.4.items.1.items.3.value"];
  }
  // Aparelho de medição
  if (composition["items.0.4.items.1.items.4.value"]) {
    jdt.items[0][4].items[1].items[4].value = composition["items.0.4.items.1.items.4.value"];
  }

  // Final
  // Código de licença
  if (composition["items.0.5.items.0.items.1.value"]) {
    jdt.items[0][5].items[0].items[1].value = composition["items.0.5.items.0.items.1.value"];
  }
  // Sistema de emissão
  if (composition["items.0.5.items.2.items.0.value"]) {
    jdt.items[0][5].items[2].items[0].value = composition["items.0.5.items.2.items.0.value"];
  }
  // Número de beneficiário
  if (composition["items.0.5.items.2.items.1.value"]) {
    jdt.items[0][5].items[2].items[1].value = composition["items.0.5.items.2.items.1.value"];
  }

  return jdt;
}

module.exports = { replace_values_jdt };

// Função para enviar a mensagem via WhatsApp redirecionando o usuário
function enviarMensagemWhatsApp(dados) {
    // Junta os dados com quebras de linha para o WhatsApp
    const mensagem = "Olá quero me interessei em uma peça "+ dados.join('\n');
    const url = `https://api.whatsapp.com/send?phone=5581984220414&text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }
  

  function exibirDados(dados) {
    console.log("Dados recebidos:", dados);
  }
  
 
  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o recarregamento da página
  
    // Captura os valores dos inputs
    let envio = document.getElementById("enviar").value;
  
    // Cria um array com os dados (pode ser usado para exibição ou outros propósitos)
    let dados = [
        `Nome: ${nomeDigitado}`,
        `Email: ${emailDigitado}`,
        `Assunto: ${assuntoDigitado}`,
        `Descrição: ${descriçaoDigitado}`
      ];
      

    
    // Exibe os dados no console
    exibirDados(dados);
    
    // Atualiza o conteúdo do parágrafo com id "resultado"
    document.getElementById("resultado").textContent = dados.join(" | ");
  
    // Envia a mensagem via redirecionamento para o WhatsApp
   // Envia a mensagem via redirecionamento para o WhatsApp
    enviarMensagemWhatsApp(dados);

  });
  
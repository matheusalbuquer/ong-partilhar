
function enviarMensagemWhatsApp(dados) {

    const mensagem = "Olá quero ser contribuir com o projeto! "+ dados.join('\n');
    const url = `https://api.whatsapp.com/send?phone=5581984220414&text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }
  

  function exibirDados(dados) {
    console.log("Dados recebidos:", dados);
  }
  
 
  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
  

    let nomeDigitado = document.getElementById("nome").value;
    let emailDigitado = document.getElementById("email").value;
    let assuntoDigitado = document.getElementById("assunto").value;
    let descriçaoDigitado = document.getElementById("descricao").value;
  
   
    let dados = [
        `Nome: ${nomeDigitado}`,
        `Email: ${emailDigitado}`,
        `Assunto: ${assuntoDigitado}`,
        `Descrição: ${descriçaoDigitado}`
      ];
      


    exibirDados(dados);
    
   
    document.getElementById("resultado").textContent = dados.join(" | ");

    
    enviarMensagemWhatsApp(dados);

  });
  
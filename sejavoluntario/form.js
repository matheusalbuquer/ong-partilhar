function enviarMensagemWhatsApp(dados) {
    const mensagem = "Olá! Quero contribuir com o projeto como voluntário. Aqui estão meus dados:\n" + dados.join('\n');
    const url = `https://api.whatsapp.com/send?phone=5581984220414&text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

function exibirDados(dados) {
    console.log("Dados recebidos:", dados);
}

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const nascimento = document.getElementById("nascimento").value;

    const dados = [
        `Nome: ${nome}`,
        `Email: ${email}`,
        `Telefone: ${telefone}`,
        `Data de nascimento: ${nascimento}`
    ];

    exibirDados(dados);

    document.getElementById("resultado").textContent = "Enviando seus dados para o WhatsApp...";

    
    enviarMensagemWhatsApp(dados);
});

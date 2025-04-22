document.addEventListener('DOMContentLoaded', () => {

    const produtos = [
        {nome: 'Vestido preto glitter', imagem:'./imgs/vestidoGliter.png', preco: 20},
        {nome: "Vestido florido", imagem:"./imgs/vestidoFlorido.png",preco: 20},
        {nome: "Blusa branca com bolinhas", imagem:"./imgs/blusaBrancaBolinhas.png",preco: 20},
        {nome: "Vestido florido com manga",imagem:"./imgs/vestidoFloridoManga.png",preco: 20},
        {nome: "Blusa adidas vermelha",imagem:"./imgs/blusaAdidas.png",preco: 15},
        {nome: "Blusa estampada",imagem:"./imgs/blusaEstampada.png",preco: 20},
        {nome: "Macacão azul marinho",imagem:"./imgs/macacao.png",preco: 35},
        {nome: "Conjunto blusa e short",imagem:"./imgs/Conjunto.png",preco: 30}
    ];

    const produtosBazar = document.querySelector(".conteiner-main-bazar");

    produtos.forEach(produtosLista => {
        const produtosCard = document.createElement('div');
        produtosCard.classList.add('produto-card');

        produtosCard.innerHTML = `
            <img src="${produtosLista.imagem}" alt="${produtosLista.nome}">
            <p>${produtosLista.nome}</p>
            <span>R$ ${produtosLista.preco},00</span>
            <a href="#" class="enviar-mensagem">Quero esta peça</a>
            <p class="resultado"></p>
        `;

        produtosBazar.appendChild(produtosCard);

        const botao = produtosCard.querySelector(".enviar-mensagem");
        const resultado = produtosCard.querySelector(".resultado");

        botao.addEventListener("click", function (e) {
            e.preventDefault();
            const mensagem = `Olá! Me interessei pela peça: ${produtosLista.nome}. Ainda está disponível?`;
            const url = `https://api.whatsapp.com/send?phone=5581984220414&text=${encodeURIComponent(mensagem)}`;
            window.open(url, "_blank");
            resultado.textContent = "Redirecionando para o WhatsApp...";
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#menu');
    const nav = document.querySelector('#nav');

    let isOpen = false;

    menu.addEventListener('click', () => {
        if (!isOpen) {
            nav.classList.add('ativo');
            isOpen = true;
        } else {
            nav.classList.remove('ativo');
            isOpen = false;
        }
    });
});


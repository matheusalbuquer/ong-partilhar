document.addEventListener('DOMContentLoaded', () => {


    const produtos = [
        {nome: 'Vetido preto gliter', imagem:'./imgs/vestidoGliter.png', preco: 20},
        {nome: "Vestido florido", imagem:"./imgs/vestidoFlorido.png",preco: 20},
        {nome: "Blusa branca com bolinhas", imagem:"./imgs/blusaBrancaBolinhas.png",preco: 20},
        {nome: "Vestido florido com manga",imagem:"./imgs/vestidoFloridoManga.png",preco: 20},
        {nome: "Blusa adidas vermelha",imagem:"./imgs/blusaAdidas.png",preco: 15},
        {nome: "Blusa estampada",imagem:"./imgs/blusaEstampada.png",preco: 20},
        {nome: "Macacão azul marinho",imagem:"./imgs/macacao.png",preco: 35},
        {nome: "Conjunto blusa e short",imagem:"./imgs/Conjunto.png",preco: 30}
        ];

        const produtosBazar = document.querySelector(".conteiner-main-bazar")

        produtos.forEach (produtosLista => {
            const produtosCard = document.createElement('div')
            produtosCard.classList.add('produto-card')

            produtosCard.innerHTML = `

                <img src="${produtosLista.imagem}" alt="${produtosLista.nome}">
                <p>${produtosLista.nome}</p>
                <span>R$ ${produtosLista.preco},00</span>
                 <a href="" id="enviar">
                    Quero esta peça
                </a>
            `

            produtosBazar.appendChild(produtosCard)

        })
});
    







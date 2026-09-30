import criarProduto from "./criarProduto.js";

function statusProduto(produto){
    let status = "Disponivel"
    if(produto.quantidade ===0){
        produto.status = "Esgotado"
    }
    console.log(produto.nome + " - " + produto.preco + " - " + status)
}

let produto1 = criarProduto("Playstation 5",3500,15)
let produto2 = criarProduto("nintendo switch 2",4500,20)

statusProduto(produto1)
statusProduto(produto2)
import adicionarLivro from "./adicionarLivro.js";

const livros =[]

console.log(`Livros antes:${livros.length}`)

const novoLivro={titulo: 'Dom Casmurro', autor: 'Machado de Assis'}
const sucesso = adicionarLivro(livros,novoLivro)

if (sucesso){
    console.log("Livro adicionado com sucesso")
}

console.log(`Livros depois:${livros.length}`)
console.log(livros)
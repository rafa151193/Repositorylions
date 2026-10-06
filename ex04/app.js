import filmes from './filmes.js';
import adicionarFilme from './adicionarFilme.js';

const novoFilme = { titulo: 'Divertida Mente' };
adicionarFilme(filmes, novoFilme);

console.log(`${novoFilme.titulo} cadastrado com o ID ${novoFilme.id}!`);
console.log(filmes);
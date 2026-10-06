function adicionarFilmes(filmes, novoFilme) {
  if (filmes.length > 0) {
    const ultimoFilme = filmes[filmes.length - 1];
    novoFilme.id = ultimoFilme.id + 1;
  } else {
    novoFilme.id = 1;
  }

  filmes.push(novoFilme);
  return true;
}

export default adicionarFilmes;
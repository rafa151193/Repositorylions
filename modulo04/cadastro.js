let aluno ={
    nome: "rafael",
    idade:32,
    curso:"javascript",
    ativo:true
}

console.log("Nome:" + aluno.nome)
console.log("Idade:"+aluno.idade)
console.log("Curso:"+ aluno.curso)

if (aluno.ativo === true){
    console.log("O alunos esta ativo")
}else{
    console.log("O alunos esta inativo")
}

if(aluno.idade >=18){
    console.log("maior de idade")
}else{
    console.log("menor de idade")
}
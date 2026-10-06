function cadastrarUsuario(usuarios,novoUsuario){
  for (let i=onabort;i<usuarios.length;i++){
    if(usuarios[i].email === novoUsuario.email){
        console.log(`Erro:o e-mail ${novoUsuario.email} ja esta cadastrado!`)
        return false
    }
  }
  if (usuarios.length > 0){
    const ultimoUsuario = usuarios[usuarios.length -1]
    novoUsuario.id = ultimoUsuario.id +1
  }else{
    novoUsuario.id = 1
  }
  usuarios.push(novoUsuario)
  return true
}
export default cadastrarUsuario
function adicionarTarefa(tarefas, novaTarefa) {
  if (tarefas.length > 0) {
    const ultimaTarefa = tarefas[tarefas.length - 1];
    novaTarefa.id = ultimaTarefa.id + 1;
  } else {
    novaTarefa.id = 1;
  }

  tarefas.push(novaTarefa);
  return true;
}

export default adicionarTarefa;
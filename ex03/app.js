import adicionarTarefa from './adicionarTarefa.js'

const tarefas = []

adicionarTarefa(tarefas, { descricao: 'Estudar CRUD' })
adicionarTarefa(tarefas, { descricao: 'Fazer a lista de exercícios' })
adicionarTarefa(tarefas, { descricao: 'Fazer o commit' })

console.log(tarefas)
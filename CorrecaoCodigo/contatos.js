import promptSync from "prompt-sync";
const prompt = promptSync();

const contatos = [];

function exibirMenu() {
  console.log("\n=== Agenda de Contatos ===");
  console.log("1. Adicionar contato");
  console.log("2. Listar contatos");
  console.log("3. Buscar contato por nome");
  console.log("4. Remover contato");
  console.log("0. Sair");
}

function adicionarContato() {
 
  const nome = prompt("Nome: ");
  const telefone = prompt("Telefone: ");

  contatos.push({ nome: nome ,telefone: telefone });
  console.log("Contato adicionado com sucesso!");
}

function listarContatos() {
  if (contatos.length === 0) {
    console.log("\nNenhum contato cadastrado.");
    return;
  }
  console.log("---\nLista de Contatos---")

  for (let i = 0; i < contatos.length; i++) {
    console.log((i + 1) + ".Nome: " + contatos[i].nome + " | Telefone:" + contatos[i].telefone);
  }
}

function buscarContato() {
  const termo = prompt("Nome a buscar: ");
  let encontrado = false;

  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i].nome.toLowerCase()=== termo.toLocaleLowerCase()) {
      console.log("Encontrado: " + contatos[i].nome + " - " + contatos[i].telefone);
      encontrado = true;
    }
  }

  if (!encontrado) {
    console.log("Nenhum contato encontrado com esse nome.");
  }
}

function removerContato() {
  const termo = prompt("Nome do contato a remover: ");
  let indice = -1;

  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i].nome.toLocaleLowerCase() === termo.toLocaleLowerCase()) {
      indice = i;
      break
    }
  }

  if (indice === -1) {
    console.log("Contato não encontrado.");
    return;
  }

  contatos.splice(indice, 1);
  console.log("Contato removido com sucesso!");
}
let opcao;
do {
  exibirMenu();
  opcao = prompt("Escolha uma opção: ");

  if (opcao === "1") {
    adicionarContato();
  } else if (opcao === "2") {
   listarContatos()
  } else if (opcao === "3") {
    buscarContato();
  } else if (opcao === "4") {
    removerContato();
  } else if (opcao === "0") {
    console.log("Encerrando a agenda. Até a próxima!");
  } else {
    console.log("Opção inválida.");
  }
} while (opcao !== "0");
      
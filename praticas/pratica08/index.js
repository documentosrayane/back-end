const readline = require('readline-sync');
const { adicionarContato, buscarContato, atualizarContato, removerContato } = require('./controlador');

function menu() {
    console.log("1. Adicionar contato");
    console.log("2. Buscar contato");
    console.log("3. Atualizar contato");
    console.log("4. Remover contato");
    console.log("5. Sair");
}

function escolherOpcao(opcao) {
    switch (opcao) {
        case '1':
            const nomeAdd = readline.question("Digite o nome do contato: ");
            const emailAdd = readline.question("Digite o email do contato: ");
            const telefoneAdd = readline.question("Digite o telefone do contato: ");
            adicionarContato(nomeAdd, emailAdd, telefoneAdd)
                .then(() => console.log("Contato adicionado com sucesso"))
                .catch(err => console.error("Erro ao adicionar contato:", err));
            break;
        case '2':
            const nomeBusca = readline.question("Digite o nome do contato: ");
            buscarContato(nomeBusca)
                .then(contato => {
                    if (contato) {
                        console.log("Nome:", contato.nome);
                        console.log("Email:", contato.email);
                        console.log("Telefone:", contato.telefone);
                    } else {
                        console.log("Contato não encontrado.");
                    }
                })
                .catch(err => console.error("Erro ao buscar contato:", err));
            break;
        case '3':
            const nomeAtualiza = readline.question("Digite o nome do contato: ");
            const emailAtualiza = readline.question("Digite o novo email do contato: ");
            const telefoneAtualiza = readline.question("Digite o novo telefone do contato: ");
            atualizarContato(nomeAtualiza, emailAtualiza, telefoneAtualiza)
                .then(() => console.log("Contato atualizado com sucesso"))
                .catch(err => console.error("Erro ao atualizar contato:", err));
            break;
        case '4':
            const nomeRemove = readline.question("Digite o nome do contato: ");
            removerContato(nomeRemove)
                .then(() => console.log("Contato removido com sucesso"))
                .catch(err => console.error("Erro ao remover contato:", err));
            break;
        case '5':
            process.exit();
        default:
            console.log("Opção inválida");
    }
}

function main() {
    while (true) {
        menu();
        const opcao = readline.question("Escolha uma opção: ");
        escolherOpcao(opcao);
    }
}

main();

const Contato = require('./modelo');

async function adicionarContato(nome, email, telefone) {
    const contato = new Contato(nome, email, telefone);
    return await contato.inserir();
}

async function buscarContato(nome) {
    const contato = new Contato(nome);
    return await contato.buscar();
}

async function atualizarContato(nome, email, telefone) {
    const contato = await buscarContato(nome);
    if (contato) {
        contato.nome = nome;
        contato.email = email;
        contato.telefone = telefone;
        return await contato.alterar();
    }
}

async function removerContato(nome) {
    const contato = await buscarContato(nome);
    if (contato) {
        return await contato.deletar();
    }
}

module.exports = { adicionarContato, buscarContato, atualizarContato, removerContato };

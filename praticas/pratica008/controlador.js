const modelo = require("./modelo");

function consultarContato(nome) {
    const contato = new modelo.Contato(nome);
    return modelo.consultar(contato);
}

async function incluirContato(nome, email, telefone) {
    const contato = new modelo.Contato(nome, email, telefone);
    return await modelo.inserir(contato);
}

function atualizarContato(nome, email, telefone) {
    const contato = consultarContato(nome);
    contato.email = email;
    contato.telefone = telefone;
    modelo.atualizarContato(contato);
    return contato;
}

function removerContato(nome) {
    const contato = consultarContato(nome);
    modelo.deletar(contato);
    return contato;
}

module.exports = {
    consultarContato,  
    incluirContato,
    atualizarContato,
    removerContato,
};

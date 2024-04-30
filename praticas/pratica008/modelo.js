const conectarDb  =  require('./database');

class Contato {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.id = null;
    }
}

async function inserir(contato) {
    const { nome, email, telefone } = contato;
    const db = await conectarDb();
    const collection = db.collection('contatos');
    const result = await collection.insertOne({ nome, email, telefone});
    contato.id = result.insertedId;
    return contato;
}

function consultar(contato) {}

function alterar(contato)  {}

function deletar(contato)  {}

module.exports = { Contato, inserir, consultar, alterar, deletar };

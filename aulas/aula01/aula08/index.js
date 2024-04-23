const { MongoClient } = require ('mongodb');

const url = "mongodb+srv://rayanemariaj:rayanevera123@cluster0.nvudsxc.mongodb.net/";

async function conectar() {
    const mongoClient = await MongoClient.connect(url);
    const db = mongoClient.db('loja');
    return db;
}


async function inserir(cliente) {
    const db= await conectar();
    const clientes = db.collection('clientes');
    return clientes.insertOne(cliente);
}

async function listar() {
    const db = await conectar();
    const clientes = db.collection('clientes');
    return clientes.find({}).toArray();
}

async function atualizar() {
    const db = await conectar();
    const clientes = db.collection('clientes');
    clientes.updateOne({_id: ''},{$set: {nome: 'Jose Maria'}});

}

async function remover() {
    const db = await conectar();
    const clientes = db.collection('clientes');
    clientes.deleteOne({_id: ''});
}

inserir({nome: 'Jose', telefone: '8888-8888'});
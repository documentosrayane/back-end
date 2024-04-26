const { MongoClient } = require('mongodb');

const url = "mongodb+srv://rayanemariaj:rayanevera123@cluster0.nvudsxc.mongodb.net/";

const client = new MongoClient(url);

async function conectarDb() {
    await client.connect();
    return client.db('agenda');
}

module.exports = conectarDb;

const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://rayanemariaj:rayanevera123@cluster0.nvudsxc.mongodb.net/';

let db = null;

async function conectarDb() {
    if (db) {
        return db;
    }

    const client = new MongoClient(url);
    await client.connect();
    db = client.db('agenda');
    return db;
}

module.exports = conectarDb;
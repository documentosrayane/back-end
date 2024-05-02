require('dotenv').config();
const mongoose = require('mongoose');
const Produto = require('./modelo');

const url = process.env.MONGODB_URL;

async function main() {
    try {
    await mongoose.connect(url);
    console.log("De boas!")
 }  catch(err) {
    console.log("Deu ruim! ", err.message);
 }

    const produto = new Produto({nome: "banana", preco: 12.0, quantidade: 5 });
    await produto.save();

 await mongoose.disconnect();
}

main();
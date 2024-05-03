const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: { type: String, trim: true, uppercase: true, required: [true, 'Nome é obrigatorio'], minLength: [3, "Nome deve ter no minimo três caracteres"]},
    preco: { type: Number, required: [true, 'Preco é obrigatorio'], min: [0, "O valor minimo do preco é zero"]},
    quantidade: { type: Number, default: 0 } 
});

module.exports = mongoose.model('Produto', produtoSchema); 
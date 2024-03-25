const express = require('express')
const reouterProdutos = require("./router");

const app = express()

app.use(reouterProdutos)

app.listen(3000, function(){
    console.log("API está ON!")
})

module.exports = app;
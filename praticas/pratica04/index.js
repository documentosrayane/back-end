const express = require('express');

const app = express();
// middileware integrado
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// middleware de app
app.use(function(req, res, next){
    console.log("Hora", new Date());
    console.log("Url", req.url);
    console.log("Metodo", req.method)
    console.log("parametro", req.params)
    console.log("Corpo", req.body)
    console.log("cabecalho", req.header)
    next();
})

// middleware de rota
app.get('/', function(req, res){
    res.status(200).end()
    res.send("home");
    res.json({codigo: 200, mensagem: 'DE BOAS'})
});

app.post('/', function(req, res){
    console.log(req.body)
    res.status(202).end()
})

app.put('/', function (resq, res){
    res.status(204).end()
})

app.delete('/', function(req, res){
    throw new Exception('error')
})

app.use(function(error, req, res, next){
    res.status(404).send({message: "DEU RUIM"})
})

app.listen(3000, function() {
    console.log("API está ON!");
});

module.exports = app
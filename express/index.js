const express = require("express"); //import express
const app = express(); //initializing express 


app.get("/", function(req, res) {
    res.send("Bem vindo ao express.js")
});

//parametro opcional :artigo?
app.get("/blog/:artigo?", function(req, res) {
    res.send("Bem vindo ao blog")
});

app.get("/ola/:nome/:empresa", function(req, res) {
    // REQ => enviados pelo usuario
    // RES => enviada para o usuario
    res.send("nome: " + req.params.nome + req.params.empresa);
    
});

//parametro opcional :artigo?
app.get("/canal/youtube", function(req, res) {
    var canal = req.query["canal"];

    if (canal) {
        res.send(canal);
    } else {
        res.send("nenhum canal fornecido");
    }
});


app.listen(4000, function(erro){
    if (erro) {
        console.log("ocorreu erro");
    }
    else {
        console.log("servidor iniciado")
    }
})




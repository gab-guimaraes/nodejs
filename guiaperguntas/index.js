//EJS Embedded JavaScript Templating

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database.js");

//DataBase

connection.authenticate()
        .then(() => {
    console.log("conexao realizada com sucesso");
})
.catch((msgErro) => {
    console.log("error");
})

//set view engine in express, configure ejs in express
app.set("view engine", "ejs");
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",(req,res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("formulário recebido! titulo " + titulo + " " + "descricao " + descricao);

});

app.listen(8080, () => {
    console.log("App Rodando")
});


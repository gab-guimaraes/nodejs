//EJS Embedded JavaScript Templating

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database.js");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

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
    Pergunta.findAll({ raw: true, order: [
        ['id', 'DESC']
    ] }).then(perguntas => {
        res.render("index", {
            pergunta: perguntas //envia array para o front
        });
    });
    
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});

app.get('/pergunta/:id', (req, res)=> {
    var id = req.params.id;
    Pergunta.findOne({
        where: { id: id }
    }).then(pergunta => {
        if (pergunta != undefined){

            Resposta.findAll({
                where: {perguntaId: pergunta.id}
            }).then(respostas => {
                res.render("pergunta", {
                    pergunta: pergunta,
                    respostas: respostas
                });
            })

        
        } else {
            res.render("/");
        }
    })
});

app.post("/responder", (req, res) => {
    var corpo = req.body.corpo
    var perguntaId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/" + perguntaId);
    })
});

app.listen(8080, () => {
    console.log("App Rodando")
});


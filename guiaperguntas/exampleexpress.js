//EJS Embedded JavaScript Templating

const express = require("express");
const app = express();

//set view engine in express, configure ejs in express
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/:nome/:lang",(req,res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = 
    [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 5.00}
    ]


    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "john wick ltda",
        msg: exibirMsg,
        produtos:produtos,
    });
})

app.listen(8080, () => {
    console.log("App Rodando")
});


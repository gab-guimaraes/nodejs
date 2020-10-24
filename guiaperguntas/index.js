//EJS Embedded JavaScript Templating

const express = require("express");
const app = express();

//set view engine in express, configure ejs in express
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/",(req,res) => {
    res.render("index");

});

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
});

app.post("/salvarpergunta", (req, res) => {
    res.send("formulário recebido!");
});

app.listen(8080, () => {
    console.log("App Rodando")
});


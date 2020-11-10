const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded( { extended: false}))
app.use(bodyParser.json())

var DB = {
    games:[
        {
            id: 1,
            title: "harry potter",
            year: 2002,
            price: 30
        }, 
        {
            id: 2,
            title: "ace combat7",
            year: 2019,
            price: 200
        }
    ]
}

app.get("/games", (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
})

app.post("/game", (req, res) => {
    var {title,price,year} = req.body;
    DB.games.push({
        id: 123,
        title,
        price,
        year
    });

    res.sendStatus(200);
})

app.get("/games/:id", (req,res) => {
    if (isNaN(req.params.id)) {
        //res.send("isso não é um número");
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);
        res.json(game);
    }

});

app.listen(8080, () => {
    console.log("API RODANDO!");
})
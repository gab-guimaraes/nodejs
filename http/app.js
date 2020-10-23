var http = require('http'); //loading module

http.createServer(function(requisicao,resposta) {
    resposta.end("<h1>Welcome to node js</h1>")
}).listen(8181);

console.log("meu servidor está rodando!")



//how to run: node app.js
const { DH_NOT_SUITABLE_GENERATOR } = require("constants");

function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        console.log(`Para ${para} ${corpo}`);
        callback("ok", 4, "8s");
    }, 8000)
}

console.log("inicio do envio do email");
enviarEmail("oi", "javascript@gmail.com", (status, amount, time) => {
    console.log(status + " " + amount + " "+ time );
    console.log("email enviado");
    console.log("ok");
});

/*
setTimeout(() => {
    console.log("teste");
}, 2000); 
*/
//waiting for 2000ms to process
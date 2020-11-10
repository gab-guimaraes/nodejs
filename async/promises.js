function enviarEmail(corpo, para, callback){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = false;
            console.log("email enviado");
            if (!deuErro) {
                resolve()
            } else {
                reject()
            }
        }, 4000);
    })
} 


enviarEmail("OLA", "OI@GMAIL.COM").then( () => {
    console.log("pagou a promessa");
})
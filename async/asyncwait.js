function pegaUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { name: "Victor", lang: "JS"},
                { name: "Lima", lang: "Java"},
                { name: "Harry Potter", lang:"leviosa"}
            ])
        }, 2000)
    })
}


async function principal () {
    var usuarios = await pegaUsuarios();
    console.log(usuarios)
}


principal();

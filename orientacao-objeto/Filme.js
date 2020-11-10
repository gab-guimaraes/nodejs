class Filme {
    constructor(titulo, ano, genero, diretor, atores, duracao) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = atores;
        this.duracao = duracao;
    }

    reproduzir() {
        console.log("reproduzindo");
    }

    pausar() {
        console.log("pausando");
    }

    avancar() {
        console.log("avancar");
    }

    fechar() {
        console.log("fechar");
    }
}

var vingadores = new Filme("Vingadores", 2020, "super heroi", "alguem", "2h" );
vingadores.titulo = 'Vingadores'
console.log(vingadores.titulo);
vingadores.reproduzir();
var hulk = new Filme();
var johnwick = new Filme();
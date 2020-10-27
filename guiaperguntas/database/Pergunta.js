const Sequelize = require("sequelize");
const connection = require("./database");

//definir nome da tabela mysql
const Pergunta = connection.define('pergunta', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//se ja existir, não recria
Pergunta.sync({force: false}).then(() => {
    console.log('tabela criada');
});

module.exports = Pergunta;
//create connection with sequelize

const Sequelize = require('sequelize');
const connection = new Sequelize('guiaperguntas', 'root', '@blink182', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
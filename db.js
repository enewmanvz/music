const {Sequelize, DataTypes, Model} = require('sequelize')
//const path = require('path')

//create sequelize connection
const sequelize = new Sequelize('database', 'username', 'password',{
    dialect: 'sqlite', //type of SQL
    //storage: path.join(__dirname, 'music.sqlite')
    storage: './music.sqlite', //file location for db
    logging:false
})

//export connection
module.exports = {sequelize, DataTypes, Model}
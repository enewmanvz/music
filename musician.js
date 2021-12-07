const {sequelize, DataTypes, Model} = require('./db')

class Musician extends Model {
   
}

Musician.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    instrument: DataTypes.STRING,
    albums: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false
})

module.exports = {Musician}
const {sequelize, DataTypes, Model} = require('./db')

class Band extends Model {}

Band.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    members: DataTypes.INTEGER,
    albums: DataTypes.INTEGER,
    hits: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false
})

module.exports = {Band}
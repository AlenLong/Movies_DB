const {Model} = require('sequelize');

module.exports = (sequelize,DataTypes) => {

    class Actors extends Model {}    // herencia tema para estudiar.
    
    Actors.init({
        first_name: DataTypes.STRING,                         // estos dos figuran en la bas de datos como datos TIMESTAMP, en el archivo config.js pusimos que iban a ser falsos. asi sequelize no lo toma como error.
        last_name: DataTypes.STRING,
        rating: DataTypes.DECIMAL,
        favorite_movie_id: DataTypes.INTEGER,
        created_at: DataTypes.DATE,                         // estos dos figuran en la bas de datos como datos TIMESTAMP, en el archivo config.js pusimos que iban a ser falsos. asi sequelize no lo toma como error.
        updated_at: DataTypes.DATE
    },{
        sequelize, 
        modelName: 'Actors',
    })
    return Actors
};
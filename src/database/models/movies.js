const {Model} = require('sequelize');

module.exports = (sequelize,DataTypes) => {

    class Movies extends Model {}    // herencia tema para estudiar.
    
    Movies.init({
        title: DataTypes.STRING,
        rating: DataTypes.DECIMAL,
        awards: DataTypes.INTEGER,
        release_date: DataTypes.DATE,
        length: DataTypes.INTEGER,
        genre_id: DataTypes.INTEGER,
        created_at: DataTypes.DATE,                         // estos dos figuran en la bas de datos como datos TIMESTAMP, en el archivo config.js pusimos que iban a ser falsos. asi sequelize no lo toma como error.
        updated_at: DataTypes.DATE

    },{
        sequelize, 
        modelName: 'Movies',
    })
    return Movies
};
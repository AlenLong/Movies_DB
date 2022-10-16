const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    index : (req,res) => {

        let peliculas = db.Movies.findAll({
            where : {
                rating : {
                    [Op.between] : [7,10]
                }
            },
            order: [['title', 'DESC']]
        })
        let actores = db.Actors.findAll({
            order : [
                ['first_name', 'ASC']
            ],
            limit : 5,
            offset :5
        })
        

        Promise.all([peliculas,actores])

        .then(([peliculas,actores]) => {

            let peliculasModificadas = peliculas.map(pelicula => {
                let nuevo = {
                id : pelicula.id,
                title : pelicula.title,
                rating : Number(pelicula.rating),
                awards : pelicula.awards,
                release_date : Date(pelicula.release_date),
                length : pelicula.length,
                created_at : pelicula.created_at,
                updated_at : pelicula.updated_at
            }
            return nuevo
            }) 

            res.send([peliculasModificadas,actores])
        })
        .catch(error=>{
            res.send(error)
        })
    },
    index1 : (req,res) => {

        let peliculas = db.Movies.findAll() // PROMESA findAll es similar a utilizar SELECT * FROM en base de datos
        let actores = db.Actors.findAll() 

        Promise.all([peliculas,actores])
        .then(([peliculas,actores]) => {
            res.send([peliculas,actores])
        })
        .catch(error=>{
            res.send(error)
        })
    },
    index2 : (req,res) => {

        db.Movies.findAll() // PROMESA findAll es similar a utilizar SELECT * FROM en base de datos
        
        .then(movies => {
            res.send(movies)
        })
        .catch(error=>{
            res.send(error)
        })
    },
    indexAsincronico : async (req,res) => {
        try {
            let movies = await db.Movies.findAll() 
            res.send(movies)
        } catch (error) {
            res.send(error)
        }
        
    },
    indexPromesa : (req,res) => {   //manera extra;a, yae sta creada la promesa. pero es otra manera de hacer la consulta.
        let movies = db.Movies.findAll() 

        new Promise((resolve, reject) => {
            if (movies) {
                resolve(movies)
            } else {
                reject('Error al conectar la base de datos')
            }
        })
        .then(movies => {
            res.send(movies)
        })
        .catch(error=>{
            res.send(error)
        })
    },
    peliculaEspecifica : (req,res) => {
    
        let nombre = req.params.nombre
        db.Movies.findOne({
            where : {
                title : nombre
            }
        }) 
        .then(movies => {
            res.send(movies)
        })
        .catch(error=>{
            res.send(error)
        })
    },
    peliculaPorId : (req,res) => {
        
        let idParams = +req.params.id

        db.Movies.findByPk(idParams)

        .then(movies => {
            res.send(movies)
        })
        .catch(error=>{
            res.send(error)
        })
    },
    actors: (req,res) => {
        db.Actors.findAll()

        .then(actors => {
            res.send(actors)
        })
        .catch(error=>{
            res.send(error)
        })
    },
}

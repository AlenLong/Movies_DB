const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    create : (req,res) => {
        db.Genre.findAll()
            .then((generos) => {

                return res.render('crearPelicula',{
                    generos
                })
            }).catch((err) => {
                res.send(err)
            });
    },

    /* ============================ */

    store : (req,res) => {

        let{title,rating,awards,release_date,length,genre} = req.body
        db.Movies.create({
            title: title,
            rating: +rating,
            awards: +awards,
            release_date: Date(release_date),
            length: +length,
            genre_id: +genre,
            created_at: new Date,  /* la fecha del momento actual . cuando se crea, al actualizarse, updated_ad, solo modifica el update_date */
            updated_at: new Date
        })
        .then((result) => {
            res.redirect('/admin/create')
        }).catch((err) =>{
            res.send(err)
        })
    },

        /* ============================ */

    edit : (req,res) => {
        let idParams = +req.params.id 
        /* db.Movies.findByPk(idParams) */ /* otro metodo para traer una sola pelicula */
        let generos = db.Genre.findAll()
        let pelicula = db.Movies.findOne({
            where : {
                id : idParams
            }
        })
        Promise.all([generos,pelicula])
        .then(([generos,pelicula]) => {
            return res.render('editarPelicula',{
                generos,
                pelicula
            })
            res.render('editarPelicula')
        }).catch((err) => {
            res.send(err)
        });
    },

        /* ============================ */

    update : (req,res) => {
        let idParams = +req.params.id
        let{title,rating,awards,release_date,length,genre} = req.body
        db.Movies.update({
            title: title,
            rating: +rating,
            awards: +awards,
            release_date: Date(release_date),
            length: +length,
            genre_id: +genre,
            updated_at: new Date
        },{
            where : {
                id : idParams
            }
        })
        .then((result) => {
            return res.redirect('/admin/create')
        }).catch((err) =>{
            res.send(err)
        })
        res.redirect('/admin/create')
    },

        /* ============================ */

    destroy : (req,res) => {
        
        res.redirect('crearPelicula')
    }
}

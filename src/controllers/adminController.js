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
    edit : (req,res) => {
        res.render('crearPelicula')
    },
    update : (req,res) => {
        res.redirect('/')
    },
    destroy : (req,res) => {
        res.redirect('crearPelicula')
    }
}

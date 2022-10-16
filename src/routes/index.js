const express = require('express');
const router = express.Router();

const { index, peliculaEspecifica, peliculaPorId, indexAsincronico, actors } = require('../controllers/indexController')

/* GET home page. */
router.get('/', index);
router.get('/asincrono', indexAsincronico);
router.get('/:nombre', peliculaEspecifica);  //:id
router.get('/title/:id', peliculaPorId);
router.get('/actors', actors);
module.exports = router;

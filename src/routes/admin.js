const express = require('express');
let router = express.Router();

const {create, store, edit, update, destroy} = require('../controllers/adminController')

/* GET home page. */
router.get('/create', create);
router.post('/create', store);

router.get('/edit/:id', edit);
router.post('/edit/:id', update);

router.post('/destroy', destroy);

module.exports = router;

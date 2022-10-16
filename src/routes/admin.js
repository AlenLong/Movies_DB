const express = require('express');
let router = express.Router();

const {list, create, store, edit, update, destroy} = require('../controllers/adminController')

/* GET home page. */
router.get('/list',list)
router.get('/create', create);
router.post('/create', store);

router.get('/edit/:id', edit);
router.post('/edit/:id', update);

router.post('/destroy/:id', destroy);

module.exports = router;

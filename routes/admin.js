const express = require('express');
const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path.js');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join( rootDir, 'views', 'add-product.html'));
});

router.post('/add-product',(req, res, next) => {
    console.log("--->",req.body);
    fs.writeFileSync('product.txt', req.body.title);
    res.redirect('/');
});


module.exports = router;
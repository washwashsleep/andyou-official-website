
import express from 'express';
let router = express.Router();

const pageComming = require('./page.comming');

router.route('/')
    .get(pageComming);

router.route('/google8a7dd20ce510daea.html')
    .get((req, res, next) => {
        return res.render('prepare/google8a7dd20ce510daea.html');
    });

module.exports = router;
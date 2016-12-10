
import express from 'express';
let router = express.Router();

const pageComming = require('./page.comming');

router.route('/')
    .get(pageComming);

module.exports = router;
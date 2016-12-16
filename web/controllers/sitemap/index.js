
import express from 'express';
let router = express.Router();

const sitemap = require('./sitemap');

router.route('/sitemap.xml')
    .get(sitemap);

module.exports = router;
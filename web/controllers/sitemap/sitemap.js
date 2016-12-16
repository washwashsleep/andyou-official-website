
import Promise from 'bluebird';
import sm from 'sitemap';
import moment from 'moment-timezone';

module.exports = async (req, res, next) => {

    let today = moment(Date.now()).tz('Asia/Taipei').format('YYYY-MM-DD');

    let sitemap = sm.createSitemap ({
        hostname: 'http://andyou.studio',
        cacheTime: 600000,
        urls: [
            { url: '/',  changefreq: 'daily', priority: 0.3, lastmod: today}
        ]
    });

    let sitemapXml = await new Promise((resolve, reject) => {
        sitemap.toXML(function(err, xml) {
            if (err) {
                return reject(err);
            }
            return resolve(xml);
        });
    });

    res.header('Content-Type', 'application/xml');
    return res.send(sitemapXml);
};
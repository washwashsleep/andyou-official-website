
import prepare from './prepare';
import sitemap from './sitemap';

module.exports = (app) => {
    app.use('/', prepare);
    app.use('/', sitemap);

    return (req, res, next) => {
        return next();
    };
};
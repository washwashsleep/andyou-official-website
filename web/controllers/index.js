
import prepare from './prepare';

module.exports = (app) => {
    app.use('/', prepare);

    return (req, res, next) => {
        return next();
    };
};
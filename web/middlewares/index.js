
import express from 'express';
import nunjucks from 'nunjucks';
import logger from 'morgan';

module.exports = (app) => {

    // view engine 設定與 views 擺放位置設定
    app.set('view engine', 'html');
    nunjucks.configure('web/views', {
        autoescape: true,
        express: app,
        watch: true
    });

    // 靜態檔案位置
    app.use('/static', express.static(rootPath + '/web/static/'));

    app.use(logger('dev'));

    return (req, res, next) => {
        return next();
    };
};
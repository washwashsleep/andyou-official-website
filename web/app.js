import express from 'express';
let app = express();

import controllers from './controllers';
import middlewares from './middlewares';
// const controllers = require('./controllers');
// const middlewares = require('./middlewares');
// const errorHandlers = require('./errorHandlers');

// middlewares
app.use(middlewares(app));

// controllers
app.use(controllers(app));

// errorHandles
// app.use(errorHandlers(app));

module.exports = app;
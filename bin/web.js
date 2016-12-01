require('babel-core/register');
require('babel-polyfill');
require('../global');
const http = require('http');

const web = require('../web/app.js');

const env = process.env.NODE_ENV || 'dev';
const port = process.env.PORT || '10011';
web.set('port', port);

const server = http.createServer(web);

server.listen(port);
console.log(`-------------------------------`);
console.log(`Start andyou web`);
console.log(`Listen Port ${port}`);
console.log(`${env} mode`);
console.log(`-------------------------------`);




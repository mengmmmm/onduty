var Koa = require('koa');
var Router = require('koa-router');
var responseTime = require('koa-response-time');
var compress = require('koa-compress');
var logger = require('koa-logger');
var load = require('./utils/load');

var app = new Koa();
var router = new Router();

router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = 'hello'
}); 

 

load(router, __dirname +'/controller');

app
  .use(responseTime())
  .use(compress())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
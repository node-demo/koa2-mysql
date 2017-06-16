import path from 'path';
import Koa from 'koa';
import Views from 'koa-views';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';
import Statics from 'koa-static';
import logger from 'koa-logger';

import index from './router';
import list from './router/list';
import api from './router/api';

const app = new Koa();
const router = KoaRouter();
const port = process.env.PORT || 3000;

// 处理各种中间件
app
  .use(logger())
  .use(bodyParser())
  .use(Statics(path.join(__dirname, 'static')))
  .use(Views(path.join(__dirname, 'views'), {
    extension: 'ejs'
  }))
  .use(router.routes())
  .use(router.allowedMethods());

// 处理路由
app.use(index.routes())
   .use(list.routes())
   .use(api.routes());

// 监听端口
app.listen(port);

// Error
app.on('error', function(err, ctx){
  console.log(err.stack);
});

export default app;
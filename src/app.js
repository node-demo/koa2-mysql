import path from 'path';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import statics from 'koa-static';
import views from 'koa-views';

const app = new Koa();

// log request URL
app.use(async(ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 各种中间件
app
  .use(bodyParser())
  .use(statics(path.join(__dirname, 'public')))
  .use(views(path.join(__dirname, 'views'), {
    extension: 'ejs'
  }));

import KoaRouter from 'koa-router';
const router = KoaRouter();
import index from './router';
import api from './router/api';

// router.get('/api', async(ctx, next) => {
//   ctx.body = `
//   <form  action="/api" method="POST">
//     <input type="text" name="name" value="">
//     <input type="submit" name="submit" value="submit">
//   </form>
//   `;
// });
// router.post('/api', async(ctx, next) => {
//   ctx.body = ctx.request.body || 'null';
// });

app.use(api.routes());
app.use(index.routes());

// 处理路由
app
  .use(router.routes())
  .use(router.allowedMethods());

// 监听端口
const port = process.env.PORT || 3000;
app.listen(port);

// Error
app.on('error', function (err) {
  console.log(err.stack)
})

export default app;
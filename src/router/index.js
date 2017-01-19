import KoaRouter from 'koa-router';
const router = KoaRouter();

import mysql from 'mysql2/promise';
import option from '../bin/db';

var data = [];

router.get('/', async(ctx, next) => {
  let db = await mysql.createConnection(option);
  let [rows, fields] = await db.execute('SELECT * FROM wish');

  data = rows;
  await next();
}, async(ctx, next) => {
  await ctx.render('index', {
    code: 1,
    msg: '请求成功',
    list: data
  });
});

export default router;
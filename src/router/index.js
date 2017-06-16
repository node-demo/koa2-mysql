import KoaRouter from 'koa-router';
import mysql2 from 'mysql2/promise';
import {Config,Wish} from '../bin/db';

const router = KoaRouter();

// (async function MysqlPro(g) {
//   g.db =  await mysql2.createConnection(Config);
// })(global);

/**
 * @patams null
 * return router.render('index)
 */
router.get('/', async (ctx, next) => {

  let db =  await mysql2.createConnection(Config);
  let [rows, fields] = await db.execute('SELECT * FROM wish WHERE ID != ""');

  global.data = rows;
  await next();

}, async (ctx, next) => {

  //指定渲染模板
  await ctx.render('index', {
    title: '首页',
    list: global.data
  });

});

export default router;
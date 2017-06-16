import KoaRouter from 'koa-router';
import mysql2 from 'mysql2/promise';
import {Config} from '../bin/db';

const router = KoaRouter();

// 演示mysql2/promise
// 实例化：db = mysql2.createConnection(config)
// 执行SQL语句：db.execute(sql)

/**
 * @patams null
 * router.get('路由',callback)
 * return router.render('模板页面',{dataList})
 */
router.get('/', async (ctx, next) => {

  let db =  await mysql2.createConnection(Config);
  let [rows, fields] = await db.execute('SELECT * FROM wish WHERE ID < ?',[5]);

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
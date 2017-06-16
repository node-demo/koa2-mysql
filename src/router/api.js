import KoaRouter from 'koa-router';
import mysql2 from 'mysql2/promise';
import Common from '../bin/common';
import {Config,User} from '../bin/db';

(async function MysqlPro(g) {
  g.db =  await mysql2.createConnection(Config);
})(global);

const router = KoaRouter();

/**
 * @patams null
 * router.get('路由',callback)
 * return {
 *    code:Number
 *    msg:String
 *    list:Array
 * }
 */
router.get('/api', async (ctx, next) => {

  let [results, fields] = await global.db.execute('SELECT * FROM wish WHERE ID  < ?',[5]);
  global.data = results;

  await next();

}, (ctx, next) => {

  ctx.body = {
    code: 1,
    msg: '请求成功',
    list: global.data
  };

});

/**
 * @patams username(String)
 * @patams content(String)
 * router.post('路由',callback)
 * return {}
 */
router.post('/api', async (ctx, next) => {

  let name = ctx.request.body.username || 'null';
  let content = ctx.request.body.content || 'null';

  await next();

  let [results,fields] = await global.db.execute('insert into wish() values(null,?,?,?)', [name, content, Common.time()]);
  ctx.body = {};

});

/**
 * @patams username(String)
 * @patams content(String)
 * router.post('路由',callback)
 * return {}
 */
router.post('/api2', async (ctx, next) => {

  let name = ctx.request.body.username || 'null';
  let content = ctx.request.body.content || 'null';

  await next();

  let result = await User.create({
    Id: '',
    username: name,
    content: content,
    time: `${Date.now()}`
  });

  console.log(result.dataValues);
  ctx.body = {};

});

export default router;
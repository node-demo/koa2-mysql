import KoaRouter from 'koa-router';
import {User} from '../bin/db';

const router = KoaRouter();

// 演示Sequelize
// 实例化：db.js -> new Sequelize(config)
// 模型：sequelize.define('模型名字',config)
// 查询：result = User.create(参数)
// 查询：rows = User.findAll(条件)
// 修改：rows[row].save()
// 删除：rows[row].destroy()

/**
 * @patams null
 * router.get('路由',callback)
 * return router.render('模板页面',{dataList})
 */
router.get('/list', async (ctx, next) => {

  // 查询
  let rows = await User.findAll({where: {ID:'1'}});

  // console.log(rows);

  // 修改和删除;
  // for(let row of rows){
  //   row.username='我是qqq';
  //
  //   await row.save();
  //
  //   if(row.ID>=10){
  //     await row.destroy();
  //   }
  // }

  await ctx.render('list', {title:'列表页',list:rows});

});

export default router;
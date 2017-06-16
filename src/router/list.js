import KoaRouter from 'koa-router';
import {Config,Wish} from '../bin/db';

const router = KoaRouter();

router.get('/list', async (ctx, next) => {

  let rows = await Wish.findAll({where: {ID:'1'}});

  //console.log(rows);
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
import KoaRouter from 'koa-router';
const router = KoaRouter();

import common from '../bin/common';
import db from '../bin/db';

var data = [];

router.post('/',(ctx, next) => {
    console.log(ctx.body);

    // console.log("INSERT INTO  `wish` (`ID` ,`username` ,`content`,`time`)
    // VALUES (NULL ,  '"+$username+"',  '"+$content+"','"+date('Y-m-d H:i:s',time()+8)+"')");

});

router.get('/',(ctx,next)=>{
    db.query('SELECT * FROM wish',(err,rows)=>{
        if (err) throw err;
        data=rows;
    });
},(ctx,next)=>{
    ctx.render('index',{list:data});
});

export default router;
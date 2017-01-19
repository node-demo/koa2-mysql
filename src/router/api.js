import KoaRouter from 'koa-router';
const router = KoaRouter();

import mysql from 'mysql2/promise';
import option from '../bin/db';

var data = [];

router.get('/api', async(ctx, next) => {
    let db = await mysql.createConnection(option);
    let [rows, fields] = await db.execute('SELECT * FROM wish');

    data = rows;
    await next();
}, (ctx, next) => {
    ctx.body = {
        code: 1,
        msg: '请求成功',
        list: data
    };
});

router.post('/api', (ctx, next) => {
    console.log(ctx.body);
});

export default router;
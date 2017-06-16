import crypto from 'crypto';

export default{
  md5(str) {
    const obj = crypto.createHash('md5');
    obj.update(str);
    return obj.digest('hex');
  },
  time() {
    let date = new Date();
    let seperator1 = "-";
    let seperator2 = ":";
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
      + " " + date.getHours() + seperator2 + date.getMinutes()
      + seperator2 + date.getSeconds();
    return currentdate;
  },
  json(ctx, code, msg, data) {
    /*
     code:0,登录成功
     code:1,用户名不存在
     code:2,用户名或密码错误（密码错误）！
     code:3,用户名或密码不能为空
     code:4,用户名或密码不能小于6位
     code:5
     */
    if (!data.length) {
      ctx.body = {
        "code": -1,
        "msg": '数据为空',
        "data": []
      };
    } else {
      ctx.body = {
        "code": code,
        "msg": msg,
        "data": data
      };
    }
  }
};
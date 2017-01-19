// import mysql from 'mysql2';
import mysql from 'mysql2/promise';

// 线上
// const username = '6cb78e801aa7490cb9f3beaaa2aa7aed';
// const password = '0a615de5c61a4fb5a8086199338f64e9';
// const db_host = 'sqld.duapp.com';
// const db_port = 4050;
// const db_name = 'QUWXvEKfsUCoqIZEdgQf';

// 本地
const username = 'root';
const password = 'root';
const db_host = 'localhost';
const db_port = 3306;
const db_name = 'echojs_wish';

const option = {
  host: db_host,
  port: db_port,
  user: username,
  password: password,
  database: db_name
}

// const db = mysql.createPool(option);
// export default db;
export default option;
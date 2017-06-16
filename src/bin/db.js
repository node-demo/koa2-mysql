//import mysql2 from 'mysql2';
//import mysql2pro from 'mysql2/promise';
import Sequelize from 'sequelize';

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
const db_name = 'wish';

// config
const config = {
  host: db_host,
  port: db_port,
  user: username,
  password: password,
  database: db_name
};

// 实例化：Sequelize
const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
});

// 模型：User
const user = sequelize.define('User', {
  ID: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  username: Sequelize.STRING(),
  content: Sequelize.STRING(),
  time: Sequelize.BIGINT
}, {
  freezeTableName:true,
  tableName:'wish',
  timestamps: false
});

// 导出配置
export const Config = config;

// 导出模型
export const User = user;

// 旧架构
//import mysql from 'mysql';
//const db = mysql.createPool(option);
//export default db;
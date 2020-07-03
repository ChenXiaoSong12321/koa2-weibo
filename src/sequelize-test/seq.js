const Sequelize = require('sequelize');

const conf = {
  host: 'localhost',
  dialect: 'mysql',
};

const DEBUG = true;
if (DEBUG) {
  conf.pool = {
    max: 5, // 连接池中最大连接数量
    min: 0, // 最小
    idle: 10000, // 如果一个连接池 10s 之内没有被使用，则释放
  };
}

const seq = new Sequelize('sina_weibo_db', 'root', 'css123456', conf);

module.exports = seq;

// 测试链接

seq.authenticate()
  .then(() => {
    console.log('ok');
  })
  .catch(() => {
    console.log('err');
  });

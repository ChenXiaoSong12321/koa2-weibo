const Sequelize = require('sequelize');
const seq = require('./seq');

const User = seq.define('user', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  nickName: {
    type: Sequelize.STRING,
    comment: '昵称',
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Blog = seq.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    comment: '内容',
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// 外键关联
Blog.belongsTo(User, { // 多对一 Blog模型属于User
  foreignKey: 'userId',
});
User.hasMany(Blog, {
  foreignKey: 'userId',
});

module.exports = {
  User, Blog,
};

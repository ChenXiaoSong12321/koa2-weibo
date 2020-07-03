const { User, Blog } = require('./model');

// eslint-disable-next-line no-unused-expressions
!(async function () {
  const zhangsan = await User.findOne({
    where: {
      userName: 'zhangsan',
    },
    attributes: ['userName', 'nickName', 'id'],
  });
  //   console.log(zhangsan.dataValues);

  //   const zhangsanBlogs = await Blog.findAll({
  //     where: {
  //       userId: zhangsan.dataValues.id,
  //     },
  //     order: [
  //       ['id', 'desc'],
  //     ],
  //   });
  //   console.log(zhangsanBlogs.map((x) => x.dataValues));

  //   分页
  //   const blogList = await Blog.findAll({
  //     limit: 2,
  //     offset: 2,
  //     order: [
  //       ['id', 'desc'],
  //     ],
  //   });
  //   console.log(blogList.map((x) => x.dataValues));

  //   const blogCount = await Blog.findAndCountAll({
  //     limit: 2,
  //     offset: 0,
  //     where: {
  //       userId: zhangsan.dataValues.id,
  //     },
  //     attributes: ['id'],
  //     order: [
  //       ['id', 'desc'],
  //     ],
  //   });
  //   console.log(blogCount.count, blogCount.rows.map((x) => x.dataValues));

  // 连表查询
  //   Blog.belongsTo(User, { // 多对一 Blog模型属于User
  //     foreignKey: 'userId',
  //   });
  //   const blogWithUser = await Blog.findAndCountAll({
  //     order: [
  //       ['id', 'desc'],
  //     ],
  //     include: [
  //       {
  //         model: User,
  //         attributes: ['userName', 'nickName'],
  //         where: {
  //           id: zhangsan.dataValues.id,
  //         },
  //       },
  //     ],
  //   });
  //   console.log(blogWithUser.count, blogWithUser.rows.map((x) => {
  //     const blogV = x.dataValues;
  //     const user = blogV.user.dataValues;
  //     delete blogV.user;
  //     return { ...blogV, user };
  //   }));

  //   User.hasMany(Blog, {
  //     foreignKey: 'userId',
  //   });
  const userWithBlog = await User.findAndCountAll({
    order: [
      ['id', 'desc'],
    ],
    attributes: ['userName', 'nickName'],
    include: [
      {
        model: Blog,
      },
    ],
  });
  console.log(userWithBlog.count, userWithBlog.rows.map((x) => {
    const user = x.dataValues;
    user.blogs = user.blogs.map((y) => y.dataValues);
    return user;
  }));
}());

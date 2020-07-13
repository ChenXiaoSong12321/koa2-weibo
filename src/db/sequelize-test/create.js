const { User, Blog } = require('./model');

// eslint-disable-next-line no-unused-expressions
!(async function () {
  // 创建用户
  const zhangsan = await User.create({
    userName: 'zhangsan',
    nickName: 'zs',
    password: '123456',
  });
  console.log('zhangsan: ', zhangsan.dataValues);
  const zhangsanId = zhangsan.dataValues.id;

  const lisi = await User.create({
    userName: 'lisi',
    nickName: 'ls',
    password: '123456',
  });
  console.log('lisi: ', lisi.dataValues);
  const lisiId = lisi.dataValues.id;

  //   创建博客
  const blog1 = await Blog.create({
    title: 'zs_blog1',
    content: 'dsdsdsdaadfad',
    userId: zhangsanId,
  });
  const blog2 = await Blog.create({
    title: 'zs_blog2',
    content: 'dsdsdsdaadfad',
    userId: zhangsanId,
  });
  const blog3 = await Blog.create({
    title: 'ls_blog1',
    content: 'dsdsdsdaadfad',
    userId: lisiId,
  });
  const blog4 = await Blog.create({
    title: 'ls_blog2',
    content: 'dsdsdsdaadfad',
    userId: lisiId,
  });
  console.log(
    blog1.dataValues,
    blog2.dataValues,
    blog3.dataValues,
    blog4.dataValues,
  );
}());

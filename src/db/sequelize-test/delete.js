const { Blog } = require('./model');
// eslint-disable-next-line no-unused-expressions
!(async function () {
  const deleteRs = await Blog.destroy({
    where: {
      id: 3,
    },
  });
  console.log(deleteRs);
}());

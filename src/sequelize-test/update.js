const { User } = require('./model');
// eslint-disable-next-line no-unused-expressions
!(async function () {
  const updateRs = await User.update({
    nickName: 'jerry',
  }, {
    where: {
      id: 1,
    },
  });
  console.log(updateRs[0]);
}());

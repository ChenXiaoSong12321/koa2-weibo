const router = require('koa-router')();

router.prefix('/users');

router.get('/', (ctx, next) => {
  ctx.body = 'this is a users response!';
});

router.get('/bar', (ctx, next) => {
  ctx.body = 'this is a users/bar response';
});

router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body;
  ctx.body = {
    title: 'login',
    userName,
    password,
  };
});

module.exports = router;

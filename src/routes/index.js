const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
  });
});

router.get('/json', async (ctx, next) => {
  const { session } = ctx;
  session.viewNum = session.viewNum == null ? 0 : (session.viewNum + 1);
  ctx.body = {
    title: 'koa2 json',
    viewNum: session.viewNum,
  };
});

router.get('/profile/:userName/:age', async (ctx, next) => {
  const { userName, age } = ctx.params;
  ctx.body = {
    title: 'profile',
    userName,
    age,
  };
});

module.exports = router;

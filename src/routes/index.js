const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
  });
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
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

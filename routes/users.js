const model = require('../moudel');
const Router = require('koa-router');

let router = new Router();
let User = model.Users;

router.prefix('/users');

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
});

router.get('/register',async (ctx)=>{
  let registerUser = ctx.request.query;
  console.log("registerUser",registerUser);
  await User.create({
      name: registerUser.name,
      password: registerUser.password
  })
  .then((result) => {
      ctx.body = {
          code: 200,
          msg: '注册成功!',
          message: result
      }
  })
  .catch(err => {
      ctx.body = {
          code: 500,
          msg: '注册失败！',
          message: err
      }
  })
});

module.exports = router

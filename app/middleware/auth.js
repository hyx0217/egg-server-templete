'use strict';
// 白名单
const white_list = [];
module.exports = () => {
  return async function auth(ctx, next) {
    if (white_list.indexOf(ctx.originalUrl) > -1) {
      next();
    } else if (!ctx.session.authToken) {
      ctx.throw(401);
      ctx.body = { code: '401', msg: 'not Found authToken ' };
    } else {
      // 这里进行seesion加密比对
      const authToken = '';
      if (ctx.session.authToken !== authToken) {
        ctx.throw(401);
        ctx.body = { code: '401', msg: 'not Found authToken ' };
      } else {
        next();
      }
    }
  };
};

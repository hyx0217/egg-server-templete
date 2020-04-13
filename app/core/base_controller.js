'use strict';
const { Controller } = require('egg');
class BaseController extends Controller {
/*   get user() {
    return this.ctx.session.user;
  }
 */
  success(res) {
    console.log(res);
    this.ctx.body = {
      status: res.code,
      success: true,
      data: res.data,
      message: res.msg,
    };
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}
module.exports = BaseController;

'use strict';
const { Controller } = require('egg');
class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }
  success(res) {
    // 后端数据返回不是驼峰式，可以通过该方法清洗数据，数据大性能可能有影响
    this.ctx.helper.formaterResponse(res.data);
    this.ctx.body = {
      code: res.code,
      data: res.data,
      msg: res.msg,
    };
  }
  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.body = {
      code: -1,
      data: '',
      msg,
    };
  }
}
module.exports = BaseController;

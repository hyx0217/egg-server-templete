'use strict';
const Controller = require('../core/base_controller');

class HomeController extends Controller {
  // 登录
  async login() {
    const {
      ctx, app,
    } = this;
    try {
      const res = await ctx.helper.http('/admin/user/login', ctx.query);
      this.success(res);
    } catch (error) {
      this.notFound(error);
    }
  }
  // 获取用户详情
  async userDetail() {
    const {
      ctx,
    } = this;
    try {
      const res = await ctx.helper.http('/admin/user/getDetail', ctx.query);
      this.success(res);
    } catch (error) {
      this.notFound(error);
    }
  }
  // 获取菜单路由
  async list() {
    const {
      ctx,
    } = this;
    try {
      const res = await ctx.helper.http('/admin/menu/getRoute');
      this.success(res);
    } catch (error) {
      this.notFound(error);
    }
  }

}

module.exports = HomeController;

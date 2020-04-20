'use strict';
const Controller = require('../core/base_controller');

class HomeController extends Controller {
  // 登录
  async login() {
    const {
      ctx,
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
  // 获取所有公用数据
  async getAllCommonList() {
    const {
      ctx,
    } = this;
    const urlArr = [ '/admin/access/getList', '/admin/fabric/getList', '/admin/factory/getList', '/admin/client/getList', '/admin/offer/getList', '/admin/proof/getList' ];
    const result = [];
    for (const value of urlArr) {
      try {
        const res = await ctx.helper.http(value);
        result.push(res.data);
        this.success({
          code: '000000',
          msg: '获取成功',
          data: result,
        });
      } catch (error) {
        this.notFound(error);
      }
    }
  }

}

module.exports = HomeController;

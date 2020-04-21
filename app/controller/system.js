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
    const urlArr = [{
      url: '/admin/access/getList',
      name: 'accessList',
    }, {
      url: '/admin/fabric/getList',
      name: 'fabricList',
    }, {
      url: '/admin/factory/getList',
      name: 'factoryList',
    }, {
      url: '/admin/client/getList',
      name: 'clientList',
    }, {
      url: '/admin/offer/getList',
      name: 'offerList',
    }, {
      url: '/admin/proof/getList',
      name: 'proofList',
    }];
    const result = [];
    for (const value of urlArr) {
      const res = ctx.helper.http(value);
      result.push(res.data);
    }
    this.success({
      code: '000000',
      msg: '获取成功',
      data: result,
    });
  }
}

module.exports = HomeController;

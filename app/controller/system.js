'use strict';
const Controller = require('../core/base_controller');
const pMap = require('p-map');
class HomeController extends Controller {
  // 登录
  async login() {
    const {
      ctx,
    } = this;
    try {
      const res = await ctx.helper.http('/user/public/login', ctx.request.body);
      this.success(res);
    } catch (error) {
      this.notFound(error);
    }
  }
  // 注册
  async register() {
    const {
      ctx,
    } = this;
    try {
      const res = await ctx.helper.http('/user/public/register', ctx.request.body);
      this.success(res);
    } catch (error) {
      this.notFound(error);
    }
  }
  async getList() {
    const {
      ctx,
    } = this;
    try {
      const res = await ctx.helper.http('/list/getList', ctx.request.body);
      this.success(res);
    } catch (error) {
      this.notFound(error);
    }
  }
  // 聚合数据
  async makeUpList() {
    const {
      ctx,
    } = this;
    const urls = [{ name: 'product', url: '/product' }, { name: 'news', url: '/news' }, { name: 'order', url: '/order' }, { name: 'tree', url: '/tree' }];
    const arr = {};
    await pMap(urls, async item => {
      const res = await ctx.helper.http(item.url);
      arr[item.name] = res.data;
    });
    this.success({ code: '000000', msg: 'success', data: arr });
  }
}

module.exports = HomeController;

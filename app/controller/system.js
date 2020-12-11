'use strict';
const Controller = require('../core/base_controller');
const pMap = require('p-map');
class HomeController extends Controller {
  // 登录
  async login() {
    const { ctx } = this;
    try {
      const res = await ctx.helper.http('/user/login', ctx.request.body);
      // 将用户信息存入session
      ctx.session.token = res.data.token;
      delete res.data.password;
      this.success(res);
    } catch (error) {
      this.notFound(error);
    }
  }
  // 退出
  async logout() {
    const { ctx } = this;
    // 删除session
    ctx.session.userId = null;
    ctx.session.token = null;
    this.success({ code: 1, data: {}, msg: '退出成功' });

  }
  // 注册
  async register() {
    const { ctx } = this;
    try {
      const res = await ctx.helper.http('/user/register', ctx.request.body);
      this.success(res);
    } catch (error) {
      this.notFound(error);
    }
  }
  // 重置密码
  async forget() {
    const { ctx } = this;
    try {
      const res = await ctx.helper.http('/user/forget', ctx.request.body);
      this.success(res);
    } catch (error) {
      this.notFound(error);
    }
  }
  // 获取session里的内容
  async getSessionInfo() {
    const { ctx } = this;
    try {
      this.success(ctx.session);
    } catch (error) {
      this.notFound(error);
    }
  }
  // 获取登录用户详情
  async getUser() {
    const { ctx } = this;
    try {
      const res = await ctx.helper.http('/user/getUser');
      this.success(res);
    } catch (error) {
      this.notFound(error);
    }
  }
  // 获取列表
  async getList() {
    const { ctx } = this;
    // let count = ctx.cookies.get('count');
    // count = count ? Number(count) : 0;
    // ctx.cookies.set('count', ++count);
    // console.log(count)
    try {
      const res = await ctx.helper.http('/list/getList', ctx.request.body);
      this.success(res);
    } catch (error) {
      this.notFound(error);
    }
  }
  // 聚合数据
  async makeUpList() {
    const { ctx } = this;
    const urls = [
      { name: 'product', url: '/product' },
      { name: 'news', url: '/news' },
      { name: 'order', url: '/order' },
      { name: 'tree', url: '/tree' },
    ];
    const arr = {};
    await pMap(urls, async item => {
      const res = await ctx.helper.http(item.url);
      arr[item.name] = res.data;
    });
    this.success({ code: '000000', msg: 'success', data: arr });
  }
}

module.exports = HomeController;

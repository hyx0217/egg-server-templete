'use strict';
const Controller = require('../core/base_controller');

class HomeController extends Controller {
  async list() {
    const { ctx } = this;
    try {
      const posts = await ctx.helper.http('/admin/menu/getRoute');
      this.success(posts);
    } catch (error) {
      this.notFound(error);
    }
  }
}

module.exports = HomeController;

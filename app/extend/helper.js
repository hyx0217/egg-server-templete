'use strict';
module.exports = {
  async http(url, data, method = 'GET') {
    const { ctx } = this;
    let targetUrl;
    /*  if (url[0] === '/') {
      url = url.splice(0, 1);
    } */
    if (url.includes('http')) {
      targetUrl = url;
    } else {
      targetUrl = this.app.config.baseUrl + url;
    }
    try {
      const start = (new Date()).getTime();
      const res = await ctx.curl(targetUrl, {
        method,
        data,
        dataType: 'json',
        headers: {
          token: ctx.headers.token,
        },
      });
      ctx.logger.info('请求响应 %d ms', Date.now() - start);
      return res.data;
    } catch (error) {
      ctx.logger.warn('请求错误：' + error);
      return error;
    }

  },
};

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
    const res = await ctx.curl(targetUrl, {
      method,
      data,
      dataType: 'json',
      headers: {
        token: '',
      },
    });
    return (res.data);
  },
};

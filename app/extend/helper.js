'use strict';
module.exports = {
  async http(url, data, method = 'GET') {
    const {
      ctx,
    } = this;
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
      const res = await ctx.curl(targetUrl, {
        method,
        data,
        dataType: 'json',
        timing: true,
        headers: {
          token: ctx.headers.token,
        },
      });
      // {
      //  queuing：分配 socket 耗时
      //  dnslookup：DNS 查询耗时
      //  connected：socket 三次握手连接成功耗时
      //  requestSent：请求数据完整发送完毕耗时
      //  waiting：收到第一个字节的响应数据耗时
      //  contentDownload：全部响应数据接收完毕耗时
      // }
      ctx.logger.info('请求响应耗时：' + res.res.timing.contentDownload + 'ms');
      if (res.data.code !== '000000') {
        throw (res.data.msg);
      }
      return res.data;
    } catch (error) {
      ctx.logger.warn('请求错误：' + error);
      throw (error);
    }
  },
};

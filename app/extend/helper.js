'use strict';
module.exports = {
  // http请求
  async http(url, data, method = 'GET') {
    const { ctx } = this;
    let targetUrl;
    // if (url[0] === '/') {
    //   url = url.slice(1);
    // }
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
      });
      //  contentDownload：全部响应数据接收完毕耗时
      if (res.res.timing.contentDownload > 1000) {
        ctx.logger.info(
          `${method}请求${targetUrl}响应耗时：${res.res.timing.contentDownload}ms`
        );
      }
      /*  if (res.data.code !== '000000') {
        throw res.data.msg;
      } */
      return res.data;
    } catch (error) {
      ctx.logger.warn('请求错误：' + error);
      throw error;
    }
  },
  // 下划转驼峰
  camelCase(val) {
    const arr = val.split('_');
    if (arr.length > 1) {
      for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      val = arr.join('');
      return val;
    }
    return false;
  },
  // 响应数据下划转驼峰
  formaterResponse(obj) {
    if (Array.isArray(obj)) {
      obj.forEach(item => {
        return this.formaterResponse(item);
      });
    } else {
      Object.keys(obj).forEach(key => {
        const value = obj[key];
        if (this.camelCase(key)) {
          obj[this.camelCase(key)] = value;
          delete obj[key];
        }
        if (Array.isArray(value)) {
          value.forEach(node => {
            return this.formaterResponse(node);
          });
        }
        if (Object.prototype.toString.call(value) === '[object Object]') {
          return this.formaterResponse(value);
        }
      });
      return obj;
    }
  },
};

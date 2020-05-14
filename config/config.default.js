/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.security = {
    csrf: {
      headerName: 'token',
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };
  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + 'Lowkey_52033';

  // add your middleware config here
  config.middleware = [];
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

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
  const config = {
    // 生产环境alinode开启监控 https://www.aliyun.com/product/nodejs
    alinode: {
      server: 'wss://agentserver.node.aliyun.com:8080',
      appid: '85354',
      secret: '7b153115ce7880388e90e80ce4ffc3dcebafb8d0',
      logdir: '/tmp/',
      /* error_log: [
        '您的应用在业务层面产生的异常日志的路径，数组，可选，可配置多个',
        '例如：/root/.logs/error.#YYYY#-#MM#-#DD#.log',
        '不更改 Egg 默认日志输出路径可不配置本项目',
      ], */
      /*    agentidMode:'IP' '可选，如果设置，则在实例ID中添加部分IP信息，用于多个实例 hostname 相同的场景（以容器为主）' */
    },
    baseUrl: 'http://106.15.121.64/server',
    keys: appInfo.name + '_1586587199716_572',

  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

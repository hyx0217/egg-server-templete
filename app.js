// app.js
'use strict';
module.exports = app => {
  const start = (new Date()).getTime();
  app.logger.debug('debug info');
  app.logger.info('启动耗时 %d ms', Date.now() - start);
  app.logger.warn('warning!');
};

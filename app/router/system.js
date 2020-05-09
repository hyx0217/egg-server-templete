'use strict';

// 系统接口
module.exports = app => {
  const { system } = app.controller;
  app.router.post('/admin/user/login', system.login);
  app.router.post('/list', system.list);
  app.router.get('/getTopic', system.getTopics);
  app.router.get('/getTopicDetail', system.getTopicDetail);
};

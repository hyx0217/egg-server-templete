'use strict';

// 系统接口
module.exports = app => {
  const { system } = app.controller;
  app.router.post('/admin/user/login', system.login);
  app.router.post('/admin/user/getDetail', system.userDetail);
  app.router.post('/list', system.list);
};

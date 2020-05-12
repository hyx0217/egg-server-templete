'use strict';

// 系统接口
module.exports = app => {
  const { system } = app.controller;
  app.router.post('/login', system.login);
  app.router.post('/register', system.register);
  app.router.post('/getList', system.getList);
};

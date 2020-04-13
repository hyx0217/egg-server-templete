'use strict';

// 系统接口
module.exports = app => {
  app.router.post('/admin/user/login', app.controller.system.list);
  app.router.post('/admin/user/getDetail', app.controller.system.list);
  app.router.post('/menu/getRoute', app.controller.system.list);
  app.router.post('/common/area/getAll', app.controller.system.list);
  app.router.post('/admin/upload/upload', app.controller.system.list);
};

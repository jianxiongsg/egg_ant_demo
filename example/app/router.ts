import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // 在中间件最前面统计请求时间
  // app.config.coreMiddleware.unshift('report');
  // const user = app.middleware.user({ test: 222 }, app);
  // const origin = app.middleware.origin(app.config);

  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.post('/pp', controller.news.postTest);
};

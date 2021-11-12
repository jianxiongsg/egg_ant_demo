import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1635738367208_3583';
  // add your egg config in here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };


  config.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.middleware = [ 'robot', 'origin' ];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,

  };

  config.amount = 3;

  // // 设置成 ' * ' 允许所有域名跨域时，如果请求带 withCredentials: true 参数，还是有跨域问题。
  // config.cors = {
  //   origin: '*',
  // };
  config.security = {
    csrf: {
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
      // useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
      // cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      // sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
    },
  };

  config.arrowOrigins = [ 'http://127.0.0.1:7001', 'http://localhost:3000' ];

  const session = {
    key: 'EGG_SESSION', // 承载 Session 的 Cookie 键值对名字
    maxAge: 86400000, // Session 的最大有效时间
  };


  config.robot = {
    ua: [ '/Baiduspider/i', 'Mozilla/6.0' ],
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    ...session,
  };
};

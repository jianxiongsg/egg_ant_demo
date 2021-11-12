import { Controller } from 'egg';
// import application from '../extend/application';

export default class NewsController extends Controller {
  public async list() {
    const { ctx, logger } = this;
    const query = ctx.query;
    console.log('.........query', query);
    logger.debug('....debug');
    logger.info('.....info');
    logger.warn('....warn');
    logger.error('....error');
    const list = await ctx.service.news.list('测试key');
    let count:any = ctx.cookies.get('count');
    console.log('.............count', count);
    count = count ? Number(count) : 0;
    ctx.cookies.set('count', count + 1);
    const userId = ctx.session.userId;
    const visited = ctx.session.visited;
    ctx.session.visited = 'test';
    console.log('............userId', userId, 'visited', visited);
    // console.log('...................bar', application.bar);
    await ctx.render('news/list.tpl', list);
  }

  public async postTest() {
    const { ctx } = this;
    const query = ctx.request.body;
    console.log('........query', query);
    const msg = await this.ctx.service.news.getMsg();
    ctx.body = { msg, status: 200 };
  }
}

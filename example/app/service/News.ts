import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * @param key - 关键字
   */
  public async list(key:string) {
    console.log(key);
    const dataList = {
      list: [
        { id: 1, title: 'this is news 1', url: '/news/1' },
        { id: 2, title: 'this is news 2', url: '/news/2' },
      ],
    };
    return dataList;
  }

  public async getMsg() {
    return 'postmsg';
  }
}

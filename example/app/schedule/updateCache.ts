import { Subscription } from 'egg';

class UpdateCache extends Subscription {
  static get schedule() {
    return {
      interval: '2s',
      type: 'all',
    };
  }

  async subscribe() {
    // console.log('.......subscribe', UpdateCache.schedule);
  }

//   async task(ctx) {
//     console.log('.......ctx', ctx);
//   }
}

export default UpdateCache;

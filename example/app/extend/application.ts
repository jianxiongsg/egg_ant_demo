const BAR = Symbol('Application#bar');
export default {
//   constructor(app) {
//     const { config } = app;
//     console.log('...................applocation', config);
//   }
  get bar() {
    const { config } = this as any;
    if (!this[BAR]) {
      this[BAR] = config.amount + 3;
    }
    console.log('...................applocation', config);
    return this[BAR];
  },
};
// export default function(app) {
//   // get bar() {
//   const { config } = app;
//   return config.amount;
//   //   },
// }

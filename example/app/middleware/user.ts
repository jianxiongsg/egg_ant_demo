

export default function(options, app) {
  console.log('user', options, app);
  return async function check(ctx, next) {
    console.log('...check');
    if (Math.random() < 0) {
      ctx.status = 403;
      ctx.message = 'no';
    } else {
      await next();
    }

  };

}

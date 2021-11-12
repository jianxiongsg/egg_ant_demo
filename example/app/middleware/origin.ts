
export default function() {
  return async function checkOrigin(ctx, next) {
    const { arrowOrigins } = ctx.app.config;

    if (!Array.isArray(arrowOrigins)) {
      await next();
      return;
    }
    const { origin } = ctx.request.header;
    if (arrowOrigins.indexOf('*') > -1 || arrowOrigins.indexOf(origin) > -1) {
      ctx.status = 200;
      ctx.response.set('Access-Control-Allow-Origin', origin);
      ctx.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      ctx.response.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    //   ctx.response.set('Access-Control-Allow-Headers', '*');
    //   ctx.response.set('Access-Control-Allow-Methods', '*');
    }
    await next();
  };
}


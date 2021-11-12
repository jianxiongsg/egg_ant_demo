
export default function(options) {
  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(v => { console.log('match', v, source.indexOf(v)); return source.indexOf(v) > -1; });
    if (match) {
      ctx.status = 403;
      ctx.message = 'go away';
    } else {
      await next();
    }
  };
}

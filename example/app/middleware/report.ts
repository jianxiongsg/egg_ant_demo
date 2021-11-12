export default function() {
  return async function(ctx, next) {
    console.log('report', ctx);
    const startTime = Date.now();
    await next();
    // 上报请求时间
    console.log('........time', Date.now() - startTime);
  };
}

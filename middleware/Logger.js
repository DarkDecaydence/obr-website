export default async function logger(ctx, next) {
    console.log(`Received ${ctx.method} ${ctx.path} - ${ctx.request.body}`);
    await next();
    console.log(`Responding ${ctx.method} ${ctx.path} - ${ctx.response.body}`);
}
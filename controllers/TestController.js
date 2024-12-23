export async function get(ctx) {
    ctx.body = "Hello World!";
}

export async function getId(ctx) {
    ctx.body = `Hello ${ctx.params.id}!`;
}
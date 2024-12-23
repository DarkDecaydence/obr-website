const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

const logger = require("./middleware/Logger").default;

const testController = require("./controllers/TestController");

const port = process.env.PORT || 3000;

app.use(logger);



router
    .get('/', testController.get)
    .get('/:id', testController.getId)

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(port);
const homePageRouter = require('./home');

function route(app) {
    app.use('/', homePageRouter);
}   

module.exports = route;
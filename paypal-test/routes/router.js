/**
 * 路由
 */
var paypal = require("../paypal");

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendfile("./public/view/index.html");
    });

    app.get('/pay', function(req, res) {
        paypal.getPassCode(req, res);
        // paypal.paySuccess(req, res);
    });

    app.get('/success', function (req, res) {
        res.sendfile("./public/view/success.html");
        // paypal.paySuccess(req, res);
    });

    app.get('/cancel', function (req, res) {
        res.sendfile("./public/view/cancel.html");
    });

    app.get('/notify', function (req, res) {
        // res.sendfile("./public/view/notify.html");
        paypal.paySuccess(req, res);
    });

};
/**
 * API for paypal configuration 
 */
'use strict';
var paypal = require('paypal-rest-sdk');
require('./configure');

exports.getPassCode = function (req, res) {
    //商品参数信息
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:8080/notify",    //返回地址
            "cancel_url": "http://localhost:8080/cancel",     //取消完成后的返回地址
            // "notify_url": "/notify"      //操作完成后的通知地址
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",   //
                    "sku": "item",
                    "price": "1.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "1.00"
            },
            "description": "Apple"
        }]
    };
    //打开付款页面
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (var i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
               //     res.redirect(payment.links[i].href);
                    console.log("getPassCode###" +payment.links[i].href);
                    var payUrl = payment.links[i].href;
                    res.redirect(payUrl);
                    // return res.json({ success: true, data: payment.links[i].href });
                }
                // console.log(payment);
            }
        }
    });
}
//支付成功处理
exports.paySuccess = function (req, res) {
    console.log('paySuccess');
    // var payerId = req.query.PayerID;
    var paymentId = req.query.paymentId;
    var payerId = { payer_id: req.query.PayerID };

    var execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "1.00"
            }
        }]
    };
    //购买
    paypal.payment.execute(paymentId, payerId, function(error, payment){
        if(error){
          console.error(JSON.stringify(error));
        } else {
          if (payment.state == 'approved'){
            console.log('payment completed successfully');
            res.redirect('http://localhost:8080/success');
          } else {
            console.log('payment not successful');
          }
        }
    });
//     paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
//         if (error) {
//             console.error(JSON.stringify(error));
//             // console.log(error.response);
//             // throw error;
//         } else {
//             console.log("Get Payment Response");
//             console.log(JSON.stringify(payment));
//             // res.redirect("/success");
//             //给paypal服务器应答成功
//             // res.send('Success');
//             res.redirect('http://localhost:8080/success');
//             // res.render('https://xxdf.localtunnel.me/paypalExecute', { title: 'Express' });
//   //          window.open('https://127.0.0.1:30001/#/paypalExecute', '_self');
  
//         }
//     });
}

//取消处理
exports.payCancel = function (req, res) {
    // return res.send('Cancelled');
    res.redirect("/");
}

exports.login = function (req, res) {
    
}

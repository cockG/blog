var paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AXcoX8i6QBVymMG2l7xRocmRDIGoZCWqCq9T3dKh9qDJD-Fm7Frf9op47wXxYZ7u9uScYh1eMVvZhP4e',  //'Af25SVW3m8iJhcSVcr8mfPGrTO2n8buuTrJF-OS4DuD07Cq07ZDFn22Sec3hMy7HnQlPkjsMhIYV-lwg',
    'client_secret': 'EEOipmYnOpyqvzVYwgNHATYLzGatifDd1a5PtkzTieW00ON3wwNc1CMgLO22hjE5E7dSTWwpt4EXAQFm' //'EALtoanVqfAW2xYk5jlFHAE5fcZpHVWuwqgrt5JaR2ljFdpiZZ07wpH2g4kuHxTMxgXpNzgPPWbw4Xkg'
});
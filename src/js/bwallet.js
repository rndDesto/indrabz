var bwalletBank= new Vue({
    el:'#bwallet-bank',
    data:{
        bwalletBank : [
            {
                "images":"../images/bwallet_bca.png",
                "title":"ATM Bank/Transfer"
            },
            {
                "images":"../images/bwallet_bca.png",
                "title":" mandiri Klikpay"
            },
            {
                "images":"../images/bwallet_bca.png",
                "title":"BCA Klikpay"
            },
            {
                "images":"../images/bwallet_bca.png",
                "title":"BCA Klikpay"
            },
            {
                "images":"../images/bwallet_bca.png",
                "title":"BCA Klikpay"
            },
        ]
    }
});


var bwalletHistory= new Vue({
    el:'#bwallet-history',
    data:{
        bWalletHistory : [
            {
                "bank_name":"BCA Klikpay",
                "saldo":"5.000.000",
                "no_trans": "1188829100281911",
                "time": "25 Januari 2019 | 22.59 WIB",
                "status": 1
            },
            {
                "bank_name":"BCA Klikpay",
                "saldo":"5.000.000",
                "no_trans": "1188829100281911",
                "time": "25 Januari 2019 | 22.59 WIB",
                "status": 2
            },
            {
                "bank_name":"BCA Klikpay",
                "saldo":"5.000.000",
                "no_trans": "1188829100281911",
                "time": "25 Januari 2019 | 22.59 WIB",
                "status": 3
            },
            {
                "bank_name":"BCA Klikpay",
                "saldo":"5.000.000",
                "no_trans": "1188829100281911",
                "time": "25 Januari 2019 | 22.59 WIB",
                "status": 4
            }
        ]
    }
});


var bWalletHistoryDetail= new Vue({
    el:'#bwallet-history-detail',
    data:{
        bWalletHistoryDetail : [
            {
                "bank_name":"BCA Klikpay",
                "saldo":"5.000.000",
                "no_trans": "1188829100281911",
                "time": "25 Januari 2019 | 22.59 WIB",
                "status": 1,
                "trf": 1,
                "jenis": "Investasi",
                "caption":"Pembayaran total investasi dari transaksi: 119215054018815002"
            },
            {
                "bank_name":"BCA Klikpay",
                "saldo":"-5.000.000",
                "no_trans": "1188829100281911",
                "time": "25 Januari 2019 | 22.59 WIB",
                "status": 1,
                "trf": 2,
                "jenis": "Topup",
                "caption":"Pembayaran total investasi dari transaksi: 119215054018815002"
            }
        ]
    }
});



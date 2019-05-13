Vue.component('cmp-header', {
    template: '<h1>Header</h1>'
})

Vue.component('cmp-footer', {
    template: `
    <div>
        <div class="container-fluid footer-container bg-white">
            <h2 class="company">PT Bizhare Indonesia</h2>
            <div class="address">
                    <p>Menara By Kibar, Jl. Raden Saleh Raya No.46A, RT.1/RW.2, Cikini, Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330 </p>
                    <p>0812-8269-5558 <br> info@bizhare.id</p>
            </div>
            <div class="service">
                <ul>
                    <li><a href="#">Ajukan Pendanaan</a></li>
                    <li><a href="#">Tentang Kami</a></li>
                    <li><a href="#">Cara Kerja</a></li>
                    <li><a href="#">Bizhare Insight</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="social">
                <div>Ikuti Kami di : </div>
                <ul>
                    <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                </ul>
            </div>
            <div class="ojk">
                <div>Terdaftar dan diawasi oleh :</div>
                <div class="ojk-logo">
                    <img class="img-fluid" src="../images/ojk.png" alt="">
                </div>
            </div>
        </div>
        <div class="trademark">
            &copy; 2019 Bizhare Indonesia. All rights reserved.
        </div>
    </div>
    `
})

var header = new Vue({
    el:'#temp-header',
    data:{
        menuService: false,
        menuProfile: false
    },
    methods: {
        showMenuService: function(){
            var service = document.getElementById('menu-service');
            service.classList.add("active");
        },
        closeMenuService: function(){
            var service = document.getElementById('menu-service');
            service.classList.remove("active");
        }   
    }
})


var nav = new Vue({
    el:'#header-menu',
    data:{
        menuService: false,
        menuProfile: false
    },
    methods: {
        closeMenuService: function(){
            var service = document.getElementById('menu-service');
            service.classList.remove("active");
        }   
    }
})


var footer = new Vue({
    el:'#temp-footer',
})




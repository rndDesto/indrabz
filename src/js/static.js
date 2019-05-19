Vue.component('cmp-header', {
    template: `
    <div class="container-fluid header-container">
        <div class="row">
            <div class="col-2">
                <div class="header-menu">
                    <img class="img-fluid" src="../images/header_menu.png" alt="share biz">
                </div>
            </div>
            <div class="col-8">
                <div class="header-logo">
                    <img class="img-fluid" src="../images/header_logo.png" alt="share biz">
                </div>
            </div>
            <div class="col-2">
                <div class="header-profil">
                    <img class="img-fluid" src="../images/header_profil.png" alt="share biz">
                </div>
            </div>
            
        </div>
    </div>
    `
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

Vue.component('cmp-navservice', {
    template:`
    <div>
        <div class="nav-overlay" id="menu-service">
            <div class="container-fluid">
                <div class="nav-heading">
                    <div class="nav-close" id="menu-service-close"><i class="fa fa-times" aria-hidden="true"></i></div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="nav-cari">
                    <input type="text" class="form-control" placeholder="Cari nama bisnis disini...">
                    <div class="icon-cari">
                        <i class="fa fa-search"></i>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="nav-list">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Investasi Bisnis</a></li>
                        <li><a href="#">Ajukan Pendanaan</a></li>
                        <li><a href="#">Tentang kami</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div class="container-fluid mt20">
                <div class="row">
                    <div class="col-6">
                            <a href="#" class="btn biz-secondary btn-full">Masuk</a>
                    </div>
                    <div class="col-6">
                        <a href="#" class="btn biz-default  btn-full">Daftar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})

Vue.component('cmp-navloggedin',{
    template: `
    <div>
        <div class="nav-loggedin" id="logged-in-service">
            <div class="container-fluid">
                <div class="nav-heading">
                    <div class="nav-close" id="logged-in-close"><i class="fa fa-times" aria-hidden="true"></i></div>
                </div>
            </div>

            <div class="container-fluid mt20">
                <!-- Start Home Profil -->
                <div class="biz-card ovh saldo-container mb10">
                    <div class="login-photo">
                        <div class="login-thumb">
                            <img class="img-fluid" src="../images/profil.jpg" alt="share biz">
                        </div>
                    </div>
                    <div class="login-user">
                            <div class="login-nama">Dadang Suherman </div>
                            <div class="login-email">dadangsuherman@gmail.com</div>
                    </div>
                </div>
                <!-- End Home Profil -->

                    <!-- Start Home Saldo -->
                <div class="biz-card ovh saldo-container mb20">
                    <div class="home-dompet">
                        <img class="img-fluid" src="../images/home_dompet.png" alt="share biz">
                    </div>
                    <div class="home-saldo">
                            <div class="saldo-caption">Saldo B-Wallet </div>
                            <div class="saldo-digit">Rp 1.000.000.000</div>
                    </div>
                </div>
                <!-- End Home Saldo -->
            </div>

            <div class="container-fluid">
                <div class="nav-list">
                    <ul>
                        <li><span><img class="img-fluid" src="../images/home_dompet.png" alt=""></span> <a href="#">Profil Saya</a></li>
                        <li><span><img class="img-fluid" src="../images/home_dompet.png" alt=""></span> <a href="#">Bisnis Saya</a></li>
                        <li><span><img class="img-fluid" src="../images/home_dompet.png" alt=""></span> <a href="#">B-Wallet</a></li>
                        <li><span><img class="img-fluid" src="../images/home_dompet.png" alt=""></span> <a href="#">Riwayat Pembelian</a></li>
                        <li><span><img class="img-fluid" src="../images/home_dompet.png" alt=""></span> <a href="#">Keluar</a></li>
                    </ul>
                </div>
            </div>
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
        }   
    }
})


var nav = new Vue({
    el:'#nav-menu',
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

var loggedIn = new Vue({
    el:'#nav-logged-in',
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

$(document).ready(function(){
    $(".header-menu").click(function(){
        $("#menu-service").addClass('active');
        $(".nav-bg-overlay").addClass('active')
    })

    $("#menu-service-close").click(function(){
        $("#menu-service").removeClass('active');
    })

    $(".header-profil").click(function(){
        $("#logged-in-service").addClass('active');
    })

    $("#logged-in-close").click(function(){
        $("#logged-in-service").removeClass('active');
    });

    $(".faq-container, .bwallet-card").click(function(){
        $(this).toggleClass('active');
    });

    $('.minta-token').click(function(){
        $(this).addClass('d-none');
        $('.bwallet-auth').removeClass('d-none');
    });

    $('.bwallet-nav .service-slide').scroll( function() {
        var navIndicator = $('.bwallet-nav .service-slide').scrollLeft();
        var navWidth = $('.bwallet-nav .service-slide').outerWidth();
        var navInside = $('.bwallet-nav .service-slide ul').outerWidth();
        var navPrev = $('.bwallet-nav .slide-prev');
        var navNext = $('.bwallet-nav .slide-next');
        if ( navIndicator > navWidth) {
            // alert('end!');
            console.log("mantap")
            navNext.addClass('d-none');
        }
        else if(navIndicator == 0){
            navNext.removeClass('d-none');
            navPrev.addClass('d-none');
        }
        else{
            navPrev.removeClass('d-none');
            navNext.removeClass('d-none');
        }
    });

    $('.bwallet-ubah-pass').click(function(){
        $('.ubah-pass-main').removeClass('d-none')
    })

    $('.minta-token-main').click(function(){
        $('.ubah-pass-main-detail').removeClass('d-none')
    })

    $('.ajukandana-nav a').click(function(e){
        e.preventDefault();
        var ajukan = $(this).data("tabajukan");
        $(this).addClass('active').closest('li').siblings().find('a').removeClass('active')
        $("[data-ajukan="+ajukan+"]").removeClass('d-none').siblings().addClass('d-none');

    })


    $('.filter-investasi').click(function(e){
        $(".investasi-pop-filter").removeClass("d-none")
    })

    $('.investasi-pop-filter').click(function(e){
        $(".investasi-pop-filter").addClass("d-none")
        $(".investasi-pop-filter-sub").removeClass("d-none")
    })

    $('.investasi-typetext').keyup(function(e){
        if($(this).val().length > 0){
            $(".investasi-search-filter").removeClass("d-none");
            $(".filter-hapus").removeClass("d-none");
        }
        else{
            $(".investasi-search-filter").addClass("d-none");
            $(".filter-hapus").addClass("d-none");
        }
    })


    $('.investasi-nav a').click(function(e){
        e.preventDefault();
        var investasi = $(this).data("tabinvestasi");
        $(this).addClass('active').closest('li').siblings().find('a').removeClass('active')
        $("[data-investasi="+investasi+"]").removeClass('d-none').siblings().addClass('d-none');

    })

    $('.show-beli-detail').click(function(e){
        $(".beli-pop-filter").removeClass("d-none")
    })
    $(".beli-berhasil").click(function(){
        $(".detail-berhasil").toggleClass("active")
    })

    $('.bisnis-filter').click(function(e){
        $(".bisnis-pop-filter").removeClass("d-none")
    })

    $('.galeri-photo').click(function(e){
        $(".overlay-galeri").removeClass("d-none")
    })


    

})


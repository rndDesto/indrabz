// $('.box').click(function(){
//     $('body').css('backgroundColor','yellow');
// });

var box = new Vue({
    el:'#user',
    data:{
        msg : [
            {
                "nama":"budy",
                "umur":20,
                "photo":"../images/paris.jpg",
                "active": false
            },
            {
                "nama":"budy",
                "umur":20,
                "photo":"../images/paris.jpg",
                "active": false
            }
        ]
    },
    methods:{
        hanndlerActive(user){
            user.active = !user.active
        }
    }
})
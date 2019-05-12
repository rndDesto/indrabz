Vue.component('cmp-header', {
    template: '<h1>Header</h1>'
})

Vue.component('cmp-footer', {
    template: '<h1>Footer</h1>'
})


var header = new Vue({
    el:'#temp-header',
})

var footer = new Vue({
    el:'#temp-footer',
})


var serviceOngoing= new Vue({
    el:'#service-ongoing',
})

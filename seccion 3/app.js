Vue.component('mi-primer-componente',{
    props:[
        'msg'
    ],
    template: `
        <div class="alert alert-success" role="alert">
            Este es mi componente 
            <button class="btn btn-primary">
                {{ msg }}
            </button>
        </div>`
})
var myApp = new Vue({
    el: "#app",
});
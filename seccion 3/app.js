Vue.component('mi-primer-componente',{
    template: `
        <div class="alert alert-success" role="alert">
            Este es mi componente 
            <button class="btn btn-primary">
                Click
            </button>
        </div>`
})
var myApp = new Vue({
    el: "#app",
});
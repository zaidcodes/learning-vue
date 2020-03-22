Vue.component('mi-primer-componente',{
    props:{
        msg:{
            type: String,
            required: true,
        }
    },  
    template: `
        <div class="alert alert-success" role="alert">
            Este es mi componente 
            <button class="btn btn-primary" @click="saludar()">
                {{ msg }}
            </button>
        </div>`,
    methods:{
        saludar:function() {
            alert("Hola " + this.msg);
        }
    }
})

var myApp = new Vue({
    el: "#app",
    data:{
        Enviar: "Enviando...",
        Jugar: "Jugando...",
    }
});
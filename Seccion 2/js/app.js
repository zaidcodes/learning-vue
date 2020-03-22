var myApp = new Vue({
    el: "#app",
    data: {
        votos: 0,
        nombre: "",
        apellido: "",
    },
    methods: {
        votar: function (){
            this.votos++;
            
        }
    },
    computed: {
        nombreCompleto: function(){
            return this.nombre + " " + this.apellido;
        },
    }
});
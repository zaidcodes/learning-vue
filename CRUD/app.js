var myApp = new Vue({
    el: "#app",
    data:{
        clave:'',
        titulo:'',
        descripcion:'',
        lista:[],
    },
    methods:{
        agregar: function (clave, titulo, descripcion) {
            var item = {
                clave: clave,
                titulo: titulo,
                descripcion: descripcion,
            }
            this.lista.push(item)
            this.limpiarCampos()
        },
        eliminar: function (clave) {
            var index = this.lista.map(function(obj) {
                return obj.clave
            }).indexOf(clave)

            this.lista.splice(index,1)
        },
        limpiarCampos: function() {
            this.clave = ""
            this.titulo =  ""
            this.descripcion = ""
        },
    },
});
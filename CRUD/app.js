var myApp = new Vue({
    el: "#app",
    data:{
        clave:'',
        titulo:'',
        descripcion:'',
        lista:[],
        txtBuscar: "",
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
            firebase.database().ref("cosas/" + clave).set(item)
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
    computed:{
        listaFiltrada: function () {
            var listaAux = this.lista
            var consulta = this.txtBuscar
            if(consulta !== ""){
                listaAux = listaAux.filter(function (obj) {
                    return (
                        obj.titulo.toLowerCase() + ' ' + obj.descripcion.toLowerCase()
                    ).indexOf(consulta.toLowerCase()) > - 1
                });
            } 
            return listaAux;
        }
    }
});
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
            // this.lista.push(item)
            this.limpiarCampos()
            firebase.database().ref("cosas/" + clave).set(item)
            this.recargarLista()
        },
        eliminar: function (clave) {
            // var index = this.lista.map(function(obj) {
            //     return obj.clave
            // }).indexOf(clave)

            // this.lista.splice(index,1)
            this.eliminarOnFirebase(clave)
            this.recargarLista()
        },
        limpiarCampos: function() {
            this.clave = ""
            this.titulo =  ""
            this.descripcion = ""
        },
        listarItemsFromFirebase(){
            var datos = firebase.database().ref("cosas")

            datos.on("value", function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var childData = childSnapshot.val()
                    myApp.lista.push(childData)
                });
            })
        },
        eliminarOnFirebase(clave){
            firebase.database().ref("cosas/" + clave).remove()
        },
        recargarLista(){
            this.lista = []
            this.listarItemsFromFirebase()
        }
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
    },
    created: function () {
        this.listarItemsFromFirebase()
    },
});
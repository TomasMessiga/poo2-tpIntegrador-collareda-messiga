const Paquete=require('../Prototipos/Paquete.js');


function Local(nombre){
    this.nombre=nombre;

    var crearReplicaDePaquete=function(paquete){
        return new Paquete();
    }


    this.producirPaquetes=(cantidad,especificaciones)=>{
        let cantidadEspecifica={1:1,2:2,3:3,4:4,5:5};
        let arregloAuxiliar=new Array(cantidadEspecifica[cantidad]);
        for (let i=0;i<cantidad;i++){
            arregloAuxiliar[i]=new Paquete(especificaciones[0],especificaciones[1],especificaciones[2]);
        }
        return arregloAuxiliar;
    };
}

module.exports=Local;
const Paquete=require('../Prototipos/Paquete.js');


function Local(nombre){
    this.nombre=nombre;

    var crearReplicaDePaquete=function(paquete){
        return new Paquete();
    }


    this.producirPaquetes=(cantidad,especificaciones)=>{
        let arregloAuxiliar=new Array(cantidad);
        for (let i=0;i<cantidad;i++){
            arregloAuxiliar[i]=new Paquete(especificaciones[0],especificaciones[1],especificaciones[2]);
        }
        return arregloAuxiliar;
    };
}

module.exports=Local;
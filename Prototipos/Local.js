const Paquete=require('../Prototipos/Paquete.js');


function Local(nombre){
    this.nombre=nombre;

    var crearReplicaDePaquete=function(paquete){
        return new Paquete();
    }


    this.producirPaquetes=(cantidad,paquete)=>{
        let arregloAuxiliar=new Array(cantidad);
        for (let i=0;i<cantidad;i++){
            arregloAuxiliar[i]=crearReplicaDePaquete(paquete);
        }
        return arregloAuxiliar;
    };
}

module.exports=Local;
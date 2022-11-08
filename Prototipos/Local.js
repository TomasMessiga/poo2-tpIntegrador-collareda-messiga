const Paquete=require('../Prototipos/Paquete.js');


function Local(nombre){
    this.nombre=nombre;


    this.producirPaquetes=(cantidad,paquete)=>{
        let arregloAuxiliar=new Array(cantidad);
        for (let i=0;i<cantidad;i++){
            arregloAuxiliar[i]=paquete.crearReplica();
        }
  //      let cantidadCorrespondiente={1:[paquete],2:[paquete,paquete],3:[paquete,paquete,paquete],4:[paquete,paquete,paquete,paquete],5:[paquete,paquete,paquete,paquete,paquete]};
        return arregloAuxiliar;
    };
}

module.exports=Local;
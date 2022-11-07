

function Local(nombre){
    this.nombre=nombre;



    this.producirPaquetes=(cantidad,paquete)=>{
        let cantidadCorrespondiente={1:[paquete],2:[paquete,paqueta],3:[paquete,paquete,paqueta],4:[paquete,paquete,paquete,paqueta],5:[paquete,paquete,paquete,paquete,paqueta]};
        return cantidadCorrespondiente[cantidad];
    };
}

module.exports=Local;
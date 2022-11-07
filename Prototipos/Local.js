

function Local(nombre){
    this.nombre=nombre;



    this.producirPaquetes=(cantidad,paquete)=>{
        let cantidadCorrespondiente={1:[paquete],2:2,3:3,4:4,5:5};
        return cantidadCorrespondiente[cantidad];
    };
}

module.exports=Local;
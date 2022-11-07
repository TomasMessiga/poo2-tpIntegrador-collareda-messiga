

function Local(nombre){
    this.nombre=nombre;



    this.producirPaquetes=(cantidad)=>{
        let cantidadCorrespondiente={undefined:1,1:1,2:2,3:3,4:4,5:5};
        return cantidadCorrespondiente[cantidad];
    };
}

module.exports=Local;
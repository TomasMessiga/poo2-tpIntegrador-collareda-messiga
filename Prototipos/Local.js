

function Local(nombre){
    this.nombre=nombre;

    this.producirPaquete=(cantidad)=>{
        return 1;
    };
}

module.exports=Local;
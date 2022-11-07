

function Local(nombre){
    this.nombre=nombre;

    this.producirPaquete=(cantidad)=>{
        if (cantidad>5){
            return undefined;
        }
        return cantidad;
    };
}

module.exports=Local;
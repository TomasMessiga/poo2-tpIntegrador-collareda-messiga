

function Local(nombre){
    this.nombre=nombre;

    this.producirPaquetes=(cantidad)=>{
        if (cantidad>5){
            return undefined;
        }
        return cantidad;
    };
}

module.exports=Local;
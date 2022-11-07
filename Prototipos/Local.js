

function Local(nombre){
    this.nombre=nombre;

    this.producirPaquete=(cantidad)=>{
        return cantidad;
    };
}

module.exports=Local;
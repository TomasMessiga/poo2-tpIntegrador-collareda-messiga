

function Local(nombre){
    this.nombre=nombre;

    this.producirPaquete=()=>{
        return 1;
    };
}

module.exports=Local;
function Validacion(){

    this.verificarCumplimiento=function (condicion,mensaje){
        if (condicion){
            throw new Error(mensaje);
        }
    }
    this.verificarIncumplimiento=function(condicion,mensaje){
        if (!condicion){
            throw new Error(mensaje)
        }
    }

}

module.exports=Validacion;
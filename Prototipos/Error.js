function Error(){

    this.verificarCumplimiento=function (condicion,mensaje){
        if (!condicion){
            throw new (mensaje);
        }
    }

}

module.exports=Error;
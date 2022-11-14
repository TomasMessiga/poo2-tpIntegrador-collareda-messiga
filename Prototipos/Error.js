function Error(){

    this.verificar=function (condicion,mensaje){
        if (condicion){
            throw new (mensaje);
        }
    }

}

module.exports=Error;
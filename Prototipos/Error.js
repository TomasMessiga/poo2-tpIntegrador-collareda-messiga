function Error(){

    this.verificar=function (condicion,variable,mensaje){
        if (condicion){
            throw new (mensaje);
        }
        return variable;
    }

}

module.exports=Error;
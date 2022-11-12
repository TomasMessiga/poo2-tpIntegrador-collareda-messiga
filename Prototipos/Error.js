function validarVariables(condicion,mensaje){
    if (condicion){
        throw new (mensaje);
    }
}
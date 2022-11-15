


function ColaSalida(){
    this.cola=[]

    this.clasificacion=function(){
        return "cola de salida";
    }

    this.incorporarPaqueteCola=function(paquete){
        this.cola.push(paquete);
    }




}

module.exports=ColaSalida;

function Sistema(){

    var tiempo=0;

    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}

    this.mapa=undefined;
    this.mover=function (paquete)
    {
        this.mapa[0][1]=paquete
        return this.mapa
    }

}

module.exports=Sistema;

function Sistema(){

    var tiempo=0;
    this.i=0

    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}

    this.mapa=undefined;
    this.mover=function (paquete)
    {
        this.mapa[this.i][1]=paquete
        this.i=this.i+1
        return this.mapa
    }

}

module.exports=Sistema;
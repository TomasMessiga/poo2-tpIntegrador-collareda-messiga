
function Sistema(){

    var tiempo=0;
    this.i=0
    this.mapa=undefined;

    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}
    this.mover=function (paquete)
    {           
                this.mapa[0][1]=paquete
                return this.mapa
                }
     
    }



module.exports=Sistema;
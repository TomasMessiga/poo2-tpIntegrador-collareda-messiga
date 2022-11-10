
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
                for( var i=0;i<this.mapa.length;i++){

                     if(this.mapa[i][1]==paquete && this.mapa[i][0]!="Distribución"){

                        this.mapa[i][1]=0
                        this.mapa[2][1]=paquete

                     }

                }
        return this.mapa
    }

}

module.exports=Sistema;
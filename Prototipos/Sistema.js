const Mapa=require('../Prototipos/Mapa.js');
function Sistema(){
    

    var tiempo=0;
    this.i=0

    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}
    this.salida=function (mapa,local,n,especificaciones)
    {           var i=0
            mapa.LocalDestino.forEach(element => { 
                i=0
                if (local.nombre==element[0]){
                    mapa.mapa[1][i]=local.fabricarPaquetes(n,especificaciones)

                }
                i++
                
             });
             return mapa.mapa
                
                }
     
    }



module.exports=Sistema;
const Mapa=require('../Prototipos/Mapa.js');
function Sistema(){
    

    var tiempo=0;
    this.i=0

    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}
    this.mover=function (mapa,Paquete)
    {          
            mapa.mapa[1][0]=Paquete
    
             return mapa.mapa
                
                }
     
    }



module.exports=Sistema;
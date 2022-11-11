const Mapa=require('../Prototipos/Mapa.js');
function Sistema(){
    

    var tiempo=0;
    this.i=0

    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}
    this.mover=function (mapa,Paquete)
    {       var index=0;  
            mapa.mapa[0][1]=Paquete
        
                
                }
     
    }



module.exports=Sistema;
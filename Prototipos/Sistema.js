const Mapa=require('../Prototipos/Mapa.js');
const Paquete=require("../Prototipos/Paquete")
function Sistema(){
    

    var tiempo=0;
    this.i=0

    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}
    this.mover=function (mapa,paquete)
    {       
       for(var i=0;i<4;i++){

        if (mapa.mapa[i][1]!=0){
            index=i

        }
       }

    
       
        return index
        
                
                }
     
    }



module.exports=Sistema;
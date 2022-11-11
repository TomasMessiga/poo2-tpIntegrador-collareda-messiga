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
        let index=0;  
        for (var i = 0; i <mapa.mapa.length ; i++) {
            if (typeof mapa.mapa[i][1]== typeof Paquete)
            {
                index=i
            }
            
          }
          if (index==0){

            mapa.mapa[index][1]=paquete
        }
        return index
        
        
                
                }
     
    }



module.exports=Sistema;
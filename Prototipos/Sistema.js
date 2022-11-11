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
        let index=[];
     
        for (let i = 0; i <mapa.mapa.length ; i++) {
            index.push(mapa.mapa[i++][1])
            
          }
          
        return index
        
        
                
                }
     
    }



module.exports=Sistema;
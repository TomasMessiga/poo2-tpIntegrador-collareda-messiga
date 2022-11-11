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
        mapa.mapa.forEach(element => {
            if (element[1]==0)
                return true         
        });
       
        
        
                
                }
     
    }



module.exports=Sistema;
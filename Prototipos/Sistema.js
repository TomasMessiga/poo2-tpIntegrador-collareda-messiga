const Mapa=require('../Prototipos/Mapa.js');
const Paquete=require("../Prototipos/Paquete")
function Sistema(){
    

    var tiempo=0;
    this.i=0

    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}
    this.mover=function (mapa,paquete){       
       let index=0
        for(var i=0;i<mapa.map.length-1;i++){

        if (typeof mapa.mapa[index][1]!='number'){
            index=i
            

        }
    }
       return index

      
                
            
     
    
}
}



module.exports=Sistema;
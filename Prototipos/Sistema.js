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
        for(var i=0;i<4;i++){

        if (typeof mapa.mapa[index][1]!='number'){
            index=i

        }
       }
       mapa.mapa[index][1]=0
       if (index==0){
        mapa.mapa[index][1]=paquete
       }
       else{
        mapa.mapa[index+1][1]=paquete
        
       }
      
                
            
     
    }
}



module.exports=Sistema;
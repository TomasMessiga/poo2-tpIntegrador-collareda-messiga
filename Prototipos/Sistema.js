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
       cond=false
        for(var i=0;i<mapa.mapa.length;i++){

        if (typeof mapa.mapa[index][1]!='number'){
            index=i
            cond=true

        }
       }
       mapa.mapa[index-1][1]=0
       if (index==0){
        mapa.mapa[index][1]= paquete
       }
       if (index>0){
        mapa.mapa[index][1]=paquete
    
       }
        return cond
      
                
            
     
    }
}



module.exports=Sistema;
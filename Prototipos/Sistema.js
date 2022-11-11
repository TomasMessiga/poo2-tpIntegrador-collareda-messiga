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
       cond=true
        for(var i=0;i<4;i++){

        if (mapa.mapa[i][1].id!=undefined){
            index=i

        }
       }
       mapa.mapa[index][1]=0
       if (index==0){
        mapa.mapa[index][1]=paquete
       }
       else{
        return true
        

       }
        
                
                }
     
    }



module.exports=Sistema;
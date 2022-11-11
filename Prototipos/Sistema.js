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
       auxmap=mapa.mapa
        for(var i=0;i<auxmap.length-1;i++){

        if (typeof auxmap[index][1]!='number'){
            index=i
            cond=true

        }
    }
       if (index==0 && cond==false ){
        auxmap[index][1]= paquete
        mapa.mapa=auxmap
       }
       else{
        auxmap[index][1]=paquete
        auxmap[index-1][1]=0
        mapa.mapa=auxmap
       }

      
                
            
     
    
}
}



module.exports=Sistema;
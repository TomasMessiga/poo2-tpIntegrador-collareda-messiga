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
       let aux =[]  
       var i=0
       var index=0
     mapa.mapa.forEach(element => {
        aux.push(element[1])
     });
     
     aux.forEach(element => {
        if (typeof element[1] == 'number'){
            index=i
        }
        i++
     });
     if (index==0){
        mapa.mapa[index][1]=paquete
     }
     else{
        mapa.mapa[index][1]=paquete
        mapa.mapa[index][1]=paquete

     }
     return index
      
                
            
     
    
}

}

module.exports=Sistema;
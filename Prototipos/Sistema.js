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
     mapa.mapa.forEach(element => {
        aux.push(element[1])
     });
     
     aux.forEach(element => {
        if (typeof element[0] == 'number'){
            index=i
        }
        i++
     });
     if (index==0){
        mapa.mapa[i][1]=paquete
     }
     return aux
      
                
            
     
    
}

}

module.exports=Sistema;
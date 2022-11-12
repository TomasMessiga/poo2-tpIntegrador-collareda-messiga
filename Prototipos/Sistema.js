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

    var index=0
    for(var i ;i<mapa.mapa.length-1;i++){

        if  (mapa.mapa[i][1].length<1){
            index=i
        }

    }
    if (index==0){
        mapa.mapa[index-1][1].push(paquete)
    }
   return  mapa.mapa[index][1].length
}
}
module.exports=Sistema;
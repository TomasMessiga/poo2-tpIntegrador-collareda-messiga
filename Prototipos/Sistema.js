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
    mapa.mapa[0][1].push(paquete)
    for(var i ;i<mapa.mapa.length;i++){

        if  (mapa.mapa[i][1].length!=0){
            index=i
        }

    }
    mapa.mapa[index][1].push(paquete)
}
}
module.exports=Sistema;
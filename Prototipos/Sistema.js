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
        var cond=false
        for (var i = 0; i <= mapa.mapa.length-1; i++) {
            if (mapa.mapa[i][1].length>0){
                index=i
                cond=true
            }
          }

   return  [mapa.mapa[3][1].length,mapa.mapa[3][1],cond]
}

}
module.exports=Sistema;
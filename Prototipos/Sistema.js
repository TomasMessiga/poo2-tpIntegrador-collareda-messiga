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
          if (index==0 && cond==false){
            mapa.mapa[index][1].push(paquete)


          }
          if (index>0 && index<mapa.mapa.length-1){
         
            mapa.mapa[index+1][1].push(paquete)

          }
   return  [mapa.mapa[index][1].length,mapa.mapa[index][1],cond,index]
}

}
module.exports=Sistema;
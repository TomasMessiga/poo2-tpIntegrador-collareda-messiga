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
      aux=mapa.buscar(paquete)
      fila=aux[0]
      columna=aux[1]
      poscola=aux[2]
      cant=mapa.mapa[fila].length-1
      if(poscola===-1){
        mapa.mapa[fila][cant-columna].push(paquete)

      }
      else{
        mapa.mapa[fila+1][columna].push(paquete)
        mapa.mapa[fila][columna].splice(poscola,1)
 

      }
     return mapa.mapa[fila][cant-columna]
      
    
    }


}
module.exports=Sistema;
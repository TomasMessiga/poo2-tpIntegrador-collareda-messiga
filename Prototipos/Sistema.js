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
      if (aux[3]==-1){
        mapa.mapa[fila][columna+2].push(paquete)

      }
      else{
        mapa.mapa[fila+1][columna].push(paquete)
        mapa.mapa[fila][columna].slice(aux[2],1)
      }
     return aux
      
   
}

}
module.exports=Sistema;
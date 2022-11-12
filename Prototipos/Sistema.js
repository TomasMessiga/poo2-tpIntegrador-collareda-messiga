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
      if(aux[0]==0 && aux[0]==1 && aux[2]==0){

        mapa.mapa[aux[0]][aux[0]].push(paquete)

      }
      this.incrementarTiempo()
      
   
}

}
module.exports=Sistema;
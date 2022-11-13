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
      cant=mapa.mapa[fila].length
      if(poscola===-1){
        mapa.mapa[fila+1][columna].push(paquete)

      }
      else{
        mapa.mapa[fila][columna+1].push(paquete)
        mapa.mapa[fila][columna].splice(poscola,1)
 

      }
     return [fila,columna,poscola]
      
    
    }
    this.especificarFabricacion=function(nombreLocal,mapa,especificacionesPaquete){
      let cont=1;
      mapa.LocalDestino.forEach(element => {
        if (element[0].nombre==nombreLocal){
          let paqueteCreado=element[0].producirPaquete(especificacionesPaquete);
          this.mover(mapa,paqueteCreado);
        }
        cont++;
      });
    }

}
module.exports=Sistema;
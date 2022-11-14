const Mapa=require('../Prototipos/Mapa.js');
const Paquete=require("../Prototipos/Paquete")
function Sistema(){
    var tiempo=0;
    this.i=0
    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}
    this.mover=function (mapa,paquete,i=0){
      aux=mapa.buscar(paquete)
      fila=aux[0]
      columna=aux[1]
      poscola=aux[2]
      cant=mapa.mapa[fila].length
      if(poscola===-1){
        mapa.mapa[fila+1+i][columna].push(paquete)
 
      }
      else{
        muevoA=mapa.mapa[0][columna+1].MeMuevoA(mapa,columna)
        mapa.mapa[muevoA[0]][muevoA[1]].push(paquete)
        mapa.mapa[fila][columna].splice(poscola,1)
 

      }
     return [fila,columna,poscola]
      
    
    }
    this.especificarFabricacion=function(nombreLocal,mapa,especificacionesPaquete){
      for(let i=0;i<mapa.LocalDestino.length;i++){
        if (mapa.LocalDestino[i][0].nombre==nombreLocal){
          let paqueteCreado=mapa.LocalDestino[i][0].producirPaquete(especificacionesPaquete,i);
          this.mover(mapa,paqueteCreado,i);

        }
      }
    }
    
    
    this.avanzartiempo=function(mapa){
      let aux=mapa.buscartodos()
      let aux1=[]
      for (var i=0 ; i<aux.length;i++){

        aux1.push(mapa.mapa[aux[i][0]][aux[i][1]][aux[i][2]])

    }
    for (var i=0 ; i<aux1.length;i++){

      return this.mover(aux1[i])

  }
  
    }

}
module.exports=Sistema;
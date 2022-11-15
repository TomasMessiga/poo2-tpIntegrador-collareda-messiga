const Mapa=require('../Prototipos/MapaAuxiliar.js');
const Paquete=require("../Prototipos/Paquete")

function Sistema(){

    var tiempo=0;
    this.i=0
    
    var dimensionesDeTrabajo=[0,0];

    this.establecerDimensiones=function(filas,columnas,mapa){
      mapa.determinarLimites(filas,columnas);
    }

    this.incrementarTiempo=function(){
        tiempo++;
    }

    this.reiniciarTiempo=function(){
      tiempo=0;
    }

    this.getTiempo=function(){return tiempo;}


    this.fabricarUnPaquete=function(mapa,nombreLocal,especificaciones){
      let cont=0;
      mapa.locales.forEach(unLocal => {
        if (unLocal.nombre==nombreLocal){
          let paquete=unLocal.producirPaquete(especificaciones);
          console.log( mapa.mapa[cont][0])
          
        }
        cont++;
      });

    }

}


module.exports=Sistema;
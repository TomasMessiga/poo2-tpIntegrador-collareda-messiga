const Mapa=require('../Prototipos/MapaAuxiliar.js');
const Paquete=require("../Prototipos/Paquete")

function Sistema(){

    var tiempo=0;
    this.i=0
    
    var dimensionesDeTrabajo=[0,0];

    this.establecerDimensiones=function(filas,columnas,mapa){
      mapa.determinarLimites(filas,columnas);
    }

    const filtrarPorUndefined=function(value, index, array) {
      return !(value===undefined);
    }
    

    this.incrementarTiempo=function(mapa){

      if (!(mapa===undefined)){
        for (let i=0;i<mapa.mapa.length;i++){
          for (let f=0;f<mapa.mapa[i].length;f++){
            for (let j=0;j<mapa.mapa[i][f].colaDeProcesamiento.length;j++){
              let paqueteAux=mapa.mapa[i][f].colaDeProcesamiento[j];
              if (!(paqueteAux===undefined)){console.log(paqueteAux===undefined);
                mapa.mapa[i][f].colaDeProcesamiento[j]=undefined;
                mapa.mapa[i][f+1].colaDeProcesamiento[j]=paqueteAux;
              }
            }
            mapa.mapa[i][f].colaDeProcesamiento=mapa.mapa[i][f].colaDeProcesamiento.filter(filtrarPorUndefined);
          }
        }
        tiempo++;
      }
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
          if (!(paquete===undefined)){
            mapa.mapa[cont][0].colaDeProcesamiento.push(paquete);
          }
        }
        cont++;
      });

    }

    this.contarPaquetes=function(mapa){
      let cont=0;
      mapa.mapa.forEach(fila => {
        fila.forEach(columna =>{
          cont+=columna.colaDeProcesamiento.length;
        });
      });
      return cont;
    }

}


module.exports=Sistema;
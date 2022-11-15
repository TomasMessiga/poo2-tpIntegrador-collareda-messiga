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
    const proto=Object.getPrototypeOf;

    this.incrementarTiempo=function(mapa){

      if (!(mapa===undefined)){
        for (let i=mapa.mapa.length-1;i>=0;i--){
          for (let f=mapa.mapa[i].length-1;f>=0;f--){
            for (let j=0;j<mapa.mapa[i][f].cola.length;j++){
              let paqueteAux=mapa.mapa[i][f].cola[j];
              
              if (proto(paqueteAux)==proto(new Paquete()) && f!=mapa.mapa[i].length-1){
                  mapa.mapa[i][f].cola[j]=undefined;
                  mapa.mapa[i][f+1].cola[j]=paqueteAux;

              } else if (proto(paqueteAux)==proto(new Paquete()) && f==mapa.mapa[i].length-1){
                mapa.mapa[i][f].cola[j]=undefined;
                mapa.destinos[i].recibidos.push(paqueteAux);
              }
            }

            
            mapa.mapa[i][f].cola=mapa.mapa[i][f].cola.filter(filtrarPorUndefined);
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
            paquete.id=mapa.mostrarContadorPaquetes()+1;
            mapa.modificarContadorPaquetes();
            mapa.mapa[cont][0].colaDeProcesamiento.push(paquete);
          }
        }
        cont++;
      });

    }

    this.contarPaquetes=function(mapa){
      return mapa.mostrarContadorPaquetes();
    }

}


module.exports=Sistema;
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


    const calcularUrgencia=function(paquete,cantidadCentros){
      let prioridades={"muy rapido": 1 , "rapido": 1.5 , "normal" : 2};
      return prioridades[paquete.tipoDeEnvio]*cantidadCentros;
    }

    const estadoUrgencia=function(paquete,cantidadCentros){
      return calcularUrgencia(paquete,cantidadCentros)-paquete.tiempo;
    }

    this.incrementarTiempo=function(mapa){
/** 
      if (!(mapa===undefined)){        
        mapa.incrementarTiempoPaquetes();
        for (let i=0;i<mapa.mapa.length;i++){
          for (let f=mapa.mapa[i].length-1;f>=0;f--){
            mapa.mapa[i][f].cola.sort(function(a,b){
              return estadoUrgencia(b,mapa.mapa[i].length)-estadoUrgencia(a,mapa.mapa[i].length);
            });
            for (let j=0;j<mapa.mapa[i][f].limiteProcesamiento;j++){
              mapa.mapa[i][f].cola
              mapa.mapa[i][f].procesados.push(paqueteAux);
            }
            mapa.mapa[i][f].procesados.sort(function(a,b){
              return estadoUrgencia(b,mapa.getLimites()[1])-estadoUrgencia(a,mapa.getLimites()[1]);
            });
            for (let k=0;k<mapa.mapa[i][f].procesados.length;k++){
              if (f==mapa.getLimites()[1]-1){
                let paqueteDestinar=mapa.mapa[i][f].procesados.push();
                mapa.destinos[i].recibidos.push(paqueteAux);
              } else if (f==0){
                let paqueteDestinar=mapa.mapa[i][f].cola.push();
                mapa.destinos[i].recibidos.push(paqueteAux);
              }

            }

            
          }
        }
        tiempo++;
      } 
       */

      
      if (!(mapa===undefined)){        
        mapa.incrementarTiempoPaquetes();
        for (let i=0;i<mapa.mapa.length;i++){
          for (let f=mapa.mapa[i].length-1;f>=0;f--){
            mapa.mapa[i][f].cola.sort(function(a,b){
              return estadoUrgencia(b,mapa.mapa[i].length)-estadoUrgencia(a,mapa.mapa[i].length);
            });
            for (let j=0;j<mapa.mapa[i][f].cola.length;j++){
              if (f==0){
                let paqueteAux=mapa.mapa[i][f].cola[j];  
                mapa.mapa[i][f].cola[j]=undefined;
                mapa.mapa[i][f+1].cola[j]=paqueteAux[0];
              } else if (f==mapa.mapa[i].length-1){
                let paqueteAux=mapa.mapa[i][f].procesarPaquete(mapa.mapa[i][f].cola[j]);  
                mapa.mapa[i][f].cola[j]=undefined;
                mapa.destinos[i].recibidos.push(paqueteAux);
              } else {
                let paqueteAux=mapa.mapa[i][f].procesarPaquete(mapa.mapa[i][f].cola[j]);  
                mapa.mapa[i][f].cola[j]=undefined;
                mapa.mapa[i][f+1].cola[j]=paqueteAux[0];
              }
            }

            
            mapa.mapa[i][f].cola=mapa.mapa[i][f].cola.filter(filtrarPorUndefined);
          }
        }
        tiempo++;
      } 
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
            mapa.mapa[cont][0].cola.push(paquete);
          }
        }
        cont++;
      });

    }

    this.contarPaquetes=function(mapa){
      return mapa.mostrarContadorPaquetes();
    }


    this.modificarColaCentro=function(mapa,fila,columna,limite){
      mapa.mapa[fila][columna].determinarLimites(limite);
    }

}


module.exports=Sistema;
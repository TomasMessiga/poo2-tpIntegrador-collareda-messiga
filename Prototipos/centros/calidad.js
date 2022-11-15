const Destino=require('../Destino.js'); 
const Facturacion = require('../centros/facturacion.js');
const Distribucion = require('../centros/distribucion.js');
//const Calidad =require('../Centros/calidad.js');

const proto=Object.getPrototypeOf;


function Calidad(){


    const rangoProcesamiento=[1,1];
    const rangoColaDeEspera=[2,5];


    this.limiteProcesamiento=rangoProcesamiento[1];
    this.limiteColaDeEspera=rangoColaDeEspera[1];

    this.cola=[];

    this.clasificacion=function(){
        return "centro de calidad";
    }


    this.determinarLimites=function(cola){
        if (limitesAdecuados(this.colaDeEspera,rangoColaDeEspera)){
            this.limiteColaDeEspera=cola;
        }
    }

    this.destinarUnPaquete=function(destino,paquete){
        if (proto(destino)==proto(new Destino())){
            destino.recibidos.push(paquete);
        } else {
            this.colaDeEspera.push(paquete);
        }
    }


    this.procesarPaquete=function(paquete){
        paquete=[paquete];
    }

    this.incorporarPaqueteCola=function(paquete){
        this.cola.push(paquete);
    }





    this.MeMuevoA=function(mapa,columna,fila){
         
        for (var i=0 ; i<mapa.mapa.length;i++){

            if (mapa.mapa[i][columna+1].length==0 || mapa.mapa[i][columna+1].length<1){
                return [i,columna+1]

            }



        }
        return [fila,columna]

    }


}
module.exports=Calidad;
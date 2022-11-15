const { fuchsia } = require("color-name");
const Paquete = require("../Paquete");

function Distribucion(){

    const rangoProcesamiento=[1,10];
    const rangoColaDeEspera=[10,30];

    this.limiteProcesamiento=rangoProcesamiento[1];
    this.limiteColaDeEspera=rangoColaDeEspera[1];

    this.cola=[];

    this.clasificacion=function(){
        return "centro de distribucion";
    }

    this.determinarLimites=function(cola){
        if (limitesAdecuados(this.colaDeEspera,rangoColaDeEspera)){
            this.limiteColaDeEspera=cola;
        }
    }


    this.procesarPaquete=function(paquete){
        return [paquete];
    }

    this.incorporarPaqueteCola=function(paquete){
        this.cola.push(paquete);
    }


    this.MeMuevoA=function(mapa,columna){
         
        for (var i=0 ; i<mapa.mapa.length;i++){

            if (mapa.mapa[i][columna+1].length==0 || mapa.mapa[i][columna+1].length<=10 ){
                return [i,columna+1]

            }



        }
        return [0,0]

    } 

}
module.exports=Distribucion;

function Calidad(){

    const rangoProcesamiento=[1,1];
    const rangoColaDeEspera=[2,5];


    this.procesamiento=[];
    this.colaDeEspera=[];
    this.limiteProcesamiento=rangoProcesamiento[0];
    this.limiteColaDeEspera=rangoColaDeEspera[0];

    const limitesAdecuados=function(arreglo,limites){
        let longitud=arreglo.length;
        return (longitud>=limites[0] && longitud<=limites[1]);
    };

    
    this.determinarLimites=function(procesamiento,cola){
        if (limitesAdecuados(this.procesamiento,rangoProcesamiento)){
            this.limiteProcesamiento=procesamiento;
        } if (limitesAdecuados(this.colaDeEspera,rangoColaDeEspera)){
            this.limiteColaDeEspera=cola;
        }
    }

    this.incorporarProcesamiento=function(paquete){
        if (this.procesamiento.length<=this.limiteProcesamiento){
            this.procesamiento.push(paquete);
        }
    }
    this.incorporarColaDeEspera=function(paquete){
        if (this.colaDeEspera.length<=this.limiteColaDeEspera){
            this.colaDeEspera.push(paquete);
        }
    }



}
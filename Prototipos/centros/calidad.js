
function Calidad(){

    const rangoProcesamiento=[0,1];
    const rangoColaDeEspera=[2,5];


    this.procesamiento=[];
    this.colaDeEspera=[];
    this.limiteProcesamiento=3;
    this.limiteColaDeEspera=6;

    
    this.determinarLimites=function(precesamiento,cola){
        this.limiteProcesamiento=precesamiento;
        this.limiteColaDeEspera=cola;
    }


}
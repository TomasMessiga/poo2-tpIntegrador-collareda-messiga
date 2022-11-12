
function Distribucion(){

    const rangoProcesamiento=[0,10];
    const rangoColaDeEspera=[10,30];


    this.procesamiento=[];
    this.colaDeEspera=[];
    this.limiteProcesamiento=3;
    this.limiteColaDeEspera=6;

    
    this.determinarLimites=function(precesamiento,cola){
        this.limiteProcesamiento=precesamiento;
        this.limiteColaDeEspera=cola;
    }

}
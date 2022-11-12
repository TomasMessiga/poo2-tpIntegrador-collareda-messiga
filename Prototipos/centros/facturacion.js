
function Facturacion(){

    const rangoProcesamiento=[0,3];
    const rangoColaDeEspera=[3,6];


    this.procesamiento=[];
    this.colaDeEspera=[];
    this.limiteProcesamiento=3;
    this.limiteColaDeEspera=6;

    
    this.determinarLimites=function(precesamiento,cola){
        this.limiteProcesamiento=precesamiento;
        this.limiteColaDeEspera=cola;
    }

}
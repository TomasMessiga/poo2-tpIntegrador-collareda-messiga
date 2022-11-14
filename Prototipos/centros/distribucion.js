
function Distribucion(){

    const rangoProcesamiento=[1,10];
    const rangoColaDeEspera=[10,30];

    this.limiteProcesamiento=rangoProcesamiento[0];
    this.limiteColaDeEspera=rangoColaDeEspera[0];

    this.colaDeProcesamiento=[];
    this.colaDeEspera=[];

    this.determinarLimites=function(procesamiento,cola){
        if (limitesAdecuados(this.procesamiento,rangoProcesamiento)){
            this.limiteProcesamiento=procesamiento;
        } if (limitesAdecuados(this.colaDeEspera,rangoColaDeEspera)){
            this.limiteColaDeEspera=cola;
        }
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
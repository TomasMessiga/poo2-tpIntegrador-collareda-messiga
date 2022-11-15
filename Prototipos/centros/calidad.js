
function Calidad(){


    const rangoProcesamiento=[1,1];
    const rangoColaDeEspera=[2,5];


    this.limiteProcesamiento=rangoProcesamiento[1];
    this.limiteColaDeEspera=rangoColaDeEspera[1];

    this.colaDeProcesamiento=[];
    this.colaDeEspera=[];

    this.clasificacion=function(){
        return "centro de calidad";
    }


    this.determinarLimites=function(procesamiento,cola){
        if (limitesAdecuados(this.procesamiento,rangoProcesamiento)){
            this.limiteProcesamiento=procesamiento;
        } if (limitesAdecuados(this.colaDeEspera,rangoColaDeEspera)){
            this.limiteColaDeEspera=cola;
        }
    }

    this.destinarUnPaquete=function(paquete){
        if (this.colaDeProcesamiento.length<this.limiteProcesamiento){
            this.colaDeProcesamiento.push(paquete);
        } else if (this.colaDeEspera.length<this.limiteColaDeEspera){
            this.colaDeEspera.push(paquete);
        }
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
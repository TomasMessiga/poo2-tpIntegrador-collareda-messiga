
function Facturacion(){
    
    const rangoProcesamiento=[1,3];
    const rangoColaDeEspera=[3,6];

    this.limiteProcesamiento=rangoProcesamiento[1];
    this.limiteColaDeEspera=rangoColaDeEspera[1];

    this.cola=[];


    this.clasificacion=function(){
        return "centro de facturacion";
    }


    this.determinarLimites=function(procesamiento,cola){
        if (limitesAdecuados(this.procesamiento,rangoProcesamiento)){
            this.limiteProcesamiento=procesamiento;
        } if (limitesAdecuados(this.colaDeEspera,rangoColaDeEspera)){
            this.limiteColaDeEspera=cola;
        }
    }
 
    this.MeMuevoA=function(mapa,columna,fila){
         
        for (var i=0 ; i<mapa.mapa.length;i++){

            if (mapa.mapa[i][columna+1].length==0 || mapa.mapa[i][columna+1].length<3){
                return [i,columna+1]

            }



        }
        return [fila,columna]

    }
    
     

}
module.exports=Facturacion;
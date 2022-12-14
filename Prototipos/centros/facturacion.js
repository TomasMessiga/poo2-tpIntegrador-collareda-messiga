
function Facturacion(){
    
    const rangoProcesamiento=[1,3];
    const rangoColaDeEspera=[3,6];

    this.limiteProcesamiento=rangoProcesamiento[1];
    this.limiteColaDeEspera=rangoColaDeEspera[1];

    this.cola=[];


    this.clasificacion=function(){
        return "centro de facturacion";
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
        if (this.cola.length<this.limiteColaDeEspera){
            this.cola.push(paquete);
            return true;
        }
        return false;
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
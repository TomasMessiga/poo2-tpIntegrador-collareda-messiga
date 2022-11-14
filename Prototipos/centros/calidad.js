
function Calidad(){


    const rangoProcesamiento=[1,1];
    const rangoColaDeEspera=[2,5];


    this.limiteProcesamiento=rangoProcesamiento[0];
    this.limiteColaDeEspera=rangoColaDeEspera[0];

    const limitesAdecuados=function(arreglo,limites){
        let longitud=arreglo.length;
        return (longitud>=limites[0] && longitud<=limites[1]);
    };


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
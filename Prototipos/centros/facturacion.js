
function Facturacion(){
    this.condicones=function(mapa,arreglocondifila){
        cantdefact=mapa.cuantolocales()

        if (arreglocondifila.length==cantdefact){
            return arreglocondifila
        }








    }
    this.MeMuevoA=function(mapa,columna,fila){
         
        for (var i=0 ; i<mapa.mapa.length;i++){

            if (mapa.mapa[i][columna+1].length==0 || mapa.mapa[i][columna+1].length<this.condicones(i)){
                return [i,columna+1]

            }



        }
        return [fila,columna]

    }

}
module.exports=Facturacion;
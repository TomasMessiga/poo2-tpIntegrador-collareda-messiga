
function Facturacion(){
    this.condicones=function(mapa,arreglocondifila=0){
        cantdefact=mapa.cuantolocales()

        if (arreglocondifila.length==cantdefact){
            return arreglocondifila
        }
        else{   
            aux=[]
            for (var i=0 ; i<cantdefact;i++){aux.push(3)}
            return aux




        }








    }
    this.MeMuevoA=function(mapa,columna,fila){
         
        for (var i=0 ; i<mapa.mapa.length;i++){

            if (mapa.mapa[i][columna+1].length==0 || mapa.mapa[i][columna+1].length<this.condicones(mapa)){
                return [i,columna+1]

            }



        }
        return [fila,columna]

    }

}
module.exports=Facturacion;
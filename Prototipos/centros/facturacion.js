
function Facturacion(){
    this.conidicion=[]
    this.condicones=function(arreglocondifila){
        this.condicion=arreglocondifila



        }








    
    this.MeMuevoA=function(mapa,columna,fila){
         
        for (var i=0 ; i<mapa.mapa.length;i++){

            if (mapa.mapa[i][columna+1].length==0 || mapa.mapa[i][columna+1].length<this.condicon){
                return [i,columna+1]

            }



        }
        return [fila,columna]

    }

}
module.exports=Facturacion;

function Facturacion(){
    this.MeMuevoA=function(mapa,columna){
         
        for (var i=0 ; i<mapa.mapa.length;i++){

            if (mapa.mapa[i][columna+1].length==0 || mapa.mapa[i][columna+1].length<3){
                return [i,columna+1]

            }



        }
        return [1,columna]

    }

}
module.exports=Facturacion;
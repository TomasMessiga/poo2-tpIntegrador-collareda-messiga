
function Calidad(){
    this.MeMuevoA=function(mapa,columna,i){
         
        for (var i=0 ; i<mapa.mapa.length;i++){

            if (mapa.mapa[i][columna+1].length==0 || mapa.mapa[i][columna+1].length<=1){
                return [i,columna+1]

            }



        }
        return [i,columna]

    }


}
module.exports=Calidad;
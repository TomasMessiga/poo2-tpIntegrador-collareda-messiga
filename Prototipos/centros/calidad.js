
function Calidad(){
    this.MeMuevoA=function(mapa,columna){
         
        for (var i=0 ; i<mapa.mapa.length;i++){

            if (mapa.mapa[i][columna+1].length==0){
                return [i,columna+1]

            }



        }
        return [0,0]

    }


}
module.exports=Calidad;
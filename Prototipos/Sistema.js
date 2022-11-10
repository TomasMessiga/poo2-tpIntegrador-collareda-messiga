
function Sistema(){

    var tiempo=0;

    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}

    this.mapa=undefined;
    this.mover=function (paquete)
    {   let bander=0
        this.mapa.forEach(element => {
            if (this.mapa[0][1]==0 && bandera==0){
                this.mapa[0][1]==paquete;
                 bander=1;



            }
            else{
                this.mapa[0][1]==0

            }
        });
        return this.mapa
    }

}

module.exports=Sistema;
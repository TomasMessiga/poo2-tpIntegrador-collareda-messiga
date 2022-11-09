

function Sistema(){

    var tiempo=0;

    this.incrementarTiempo=function(){
        tiempo++;
    }

    this.mostrarTiempo=tiempo;

}

module.exports=Sistema;
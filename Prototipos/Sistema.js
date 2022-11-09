

function Sistema(){

    var tiempo=0;

    this.incrementarTiempo=function(){
        tiempo++;
    }

    this.getTiempo=function(){return tiempo;}

}

module.exports=Sistema;
const Mapa=require('../Prototipos/Mapa.js');
const Paquete=require("../Prototipos/Paquete")
function Sistema(){
    

    var tiempo=0;
    this.i=0

    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}
    this.mover=function (mapa,paquete){
       let i=0
       var index =0
       mapa.mapa.forEach(element => {
        if (element[1].length!=0){
            i=index

        }
        i++

    });
    mapa.mapa[index][1].push(paquete)

    return mapa.mapa[index][1].length
}
}
module.exports=Sistema;
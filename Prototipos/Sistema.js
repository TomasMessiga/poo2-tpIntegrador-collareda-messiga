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
        var index=0
        var i=0    
        mapa.mapa.forEach(element => {

            if (element[1].length==0){
                index=i
            }
            i++
            
        });
        mapa.mapa[index][1].push(paquete)
        return index
}
}
module.exports=Sistema;
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
       let index=0
       let mat=[]
        for(var i=0;i<4;i++){

        if (mapa.mapa[i][1].id!=undefined){
            index=index+i

        }
        mat.push(mapa.mapa[index][1])
       }

    
       
        return mat
        
                
                }
     
    }



module.exports=Sistema;
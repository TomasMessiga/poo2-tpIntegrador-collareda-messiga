const Mapa=require('../Prototipos/Mapa.js');
function Sistema(){
    

    var tiempo=0;
    this.i=0

    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}
    this.mover=function (mapa,Paquete)
    {       
        let index=0;  
        for (var i = 0; i <mapa.mapa.length ; i++) {
            if (mapa.mapa[i][1]===Paquete){
                index=i
            }
            if (index==0){

                mapa.mapa[index][1]=Paquete
            }
            else{
                mapa.mapa[index][1]=0
                mapa.mapa[1][1]=Paquete
            }
          }
        
        
                
                }
     
    }



module.exports=Sistema;
const Mapa=require('../Prototipos/Mapa.js');
function Sistema(){
    

    var tiempo=0;
    this.i=0

    this.incrementarTiempo=function(){
        tiempo++;
    }
    this.getTiempo=function(){return tiempo;}
    this.mover=function (mapa,Paquete)
    {       var index=0;  
        var i = 0; 
        mapa.mapa.forEach(element => {
            
            if(element[1].id==Paquete.id && index==0){
             index=i
            }
            i++
            
            
        });
            mapa.mapa[index+1][1]=Paquete
            mapa.mapa[index][1]=0
    
             return mapa
                
                }
     
    }



module.exports=Sistema;
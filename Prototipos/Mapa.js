const fill = require("fill-range");

function Mapa(){ 
    this.mapa=[["cola de salida de local","Facturación","Calidad","Distibucion"]]
    this.LocalDestino=[]
    var contadorDePaquetes=0;
    
    this.generar=function(local,destino){
     this.LocalDestino.push([local,destino])
     var aux=[]
     for(var i = 0 ; i<this.mapa[0]-1;i ){
        aux.push=([])

     }
     this.mapa.push(aux)
     return this.mapa.mapa
    }
    this.buscar=function(paquete){
        fila=0
        columna=0
        poscola=-1
        aux=[]
        for (var i = 0; i < this.mapa.length; i++) {
            for (var j = 1; j < this.mapa[i].length; j++) {
                if (this.mapa[i][j].length>0){
                    for (var k = 0; k < this.mapa[i][j].length; k++){
                        if(this.mapa[i][j][k].id=paquete.id){
                            fila=i
                            columna=j
                            poscola=k
                        }
                    }
                }             
            }
          }
        return ([fila,columna,poscola])
            
        };
        

    }    



module.exports=Mapa;
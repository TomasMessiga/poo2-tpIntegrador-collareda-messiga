const fill = require("fill-range");

function Mapa(){ 
    this.mapa=[["cola de salida de locas"],["Facturación"],["Calidad"] , ["Distribución"]]
    this.LocalDestino=[]
    this.generar=function(local,destino){
        this.mapa.forEach(element => {
            element.push([])
            this.LocalDestino.push([local,destino])

        
        
        });
        return this.mapa
    }
    this.buscar=function(paquete){
        fila=0
        columna=0
        for (var i = 1; i <= this.mapa.length-1; i++) {
            for (var j = 0; j <= i; i++) {
                
                if (this.mapa[i][j].length>0){

                    fila=i
                    columna=j
                }

        
            }
        
          }
        return ('fila:'+i+'columna'+j)
            
        };
        

    }    



module.exports=Mapa;
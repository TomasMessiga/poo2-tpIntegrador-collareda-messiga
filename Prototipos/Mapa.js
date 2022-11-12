const fill = require("fill-range");

function Mapa(){ 
    this.mapa=[["cola de salida de locas"],["Facturación"],["Calidad"] , ["Distribución"]]
    this.LocalDestino=[]
    this.generar=function(local,destino){
        this.mapa.forEach(element => {
            element.push([])
            this.LocalDestino.push([local,destino])
        
        
        });
    this.buscar=function(paquete){
        fila=0
        columna=0
        for (var i = 1; i <= this.mapa.length-1; i++) {
            for (var j = 0; j <= this.mapa[i].length-1; i++) {
                
                if (this.mapa[i]>0){

                    fila=i
                    columna=j
                }

        
            }
        
          }
        return ('fila:'+i+'columna'+j)
            
        };
        

    }    

    return this.mapa

}


module.exports=Mapa;
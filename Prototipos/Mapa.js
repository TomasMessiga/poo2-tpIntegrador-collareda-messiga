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
        aux=[]
        for (var i = 0; i < this.mapa.length; i++) {
            for (var j = 1; j < this.mapa[i].length; j++) {
                if (this.mapa[i][j].length>0){
                    fila=i
                    columna=j
                }
                aux.push(this.mapa[i][j])
        
            }
        
          }
        return (aux)
            
        };
        

    }    



module.exports=Mapa;
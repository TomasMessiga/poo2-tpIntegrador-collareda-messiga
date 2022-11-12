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
 
        return (this.mapa[0][1])
            
        };
        

    }    



module.exports=Mapa;
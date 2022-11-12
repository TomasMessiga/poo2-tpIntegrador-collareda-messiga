
function Mapa(){ 
    this.mapa=[["cola de salida de locas"],["Facturación"],["Calidad"] , ["Distribución"]]
    this.LocalDestino=[]
    this.generar=function(arregloAuxiliar){
        this.mapa.forEach(element => {
            element.push('')
            this.LocalDestino.push(arregloAuxiliar)
        
        
        });

    return this.mapa

}
}


module.exports=Mapa;

function Mapa(){
    this.mapa=[["cola de salida de locas"],["Facturación"],["Calidad"] , ["Distribución"]]
    this.generar=function(num){
        this.mapa.forEach(element => element.push([0]));

    return this.mapa

}
}


module.exports=Mapa;
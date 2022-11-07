
function Mapa(){
    this.mapa=[["cola de salida de locas"],["Facturación"],["Calidad"] , ["Distribución"]]
    this.generar=function(num){
        for(var i=0;i<=this.mapa.length;i++){ 
            for (var j=0;j<=num;j++)
                this.mapa[i].push([0])
        }
    return this.mapa
}
}


module.exports=Mapa;
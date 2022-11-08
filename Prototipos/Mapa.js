
function Mapa(){ 
    this.mapa=[["cola  de salida de locas"],["Facturación"],["Calidad"] , ["Distribución"]]
    this.generar=function(num){
        this.mapa.forEach(element => {for(var i=0 ; i<num;i++ ){element.push(0)}});

    return this.mapa

}
}


module.exports=Mapa;
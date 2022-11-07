
function Mapa(){
    this.mapa=["cola de salida de locas","Facturación","Calidad" , "Distribución"]
    this.generar=function(num){
        for(var i=0;i<num;i++){
    
                this.mapa[i].push([0])
        }
    return this.mapa
}
}


module.exports=Mapa;

function Mapa(){ 
    this.mapa=[]
    this.LocalDestino=[]//[[loca],[loca1],[],[]]
    this.centro=function(arreglodecentro){
        this.mapa.push(arreglodecentro)
    }
    this.generar=function(local,destino){
     this.LocalDestino.push([local,destino])
     let aux=[]
     for(var i = 0 ; i<this.mapa[0].length;i++ ){
        aux.push([])

     }
     this.mapa.push(aux)
     return this.mapa
    }
    this.buscar=function(paquete){
        fila=0
        columna=0
        poscola=-1
        for (var i = 1; i < this.mapa.length; i++) {
            for (var j = 0; j < this.mapa[i].length; j++) {
                if (this.mapa[i][j].length>0){
                    for (var k = 0; k < this.mapa[i][j].length; k++){
                        if(this.mapa[i][j][k].id==paquete.id){
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
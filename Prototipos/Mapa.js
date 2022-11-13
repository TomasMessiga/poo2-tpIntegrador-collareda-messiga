const fill = require("fill-range");

function Mapa(){ 
    this.mapa=[["cola de salida de local"],["Facturación"],["Calidad"] , ["Distribución"]]
    this.LocalDestino=[]
    var contadorDePaquetes=0;

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
        poscola=-1
        aux=[]
        for (var i = 0; i < this.mapa.length; i++) {
            for (var j = 1; j < this.mapa[i].length; j++) {
                if (this.mapa[i][j].length>0){
                    for (var k = 0; k < this.mapa[i][j].length; k++){
                        if(this.mapa[i][j][k].id=paquete.id){
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
    
    this.producirPaquete=function(nombreDeLocal,especificaciones){
        let cont=0;
        this.LocalDestino.forEach(extremos => {
            if (extremos[0].nombre==nombreDeLocal){
                let nuevoPaquete=extremos[0].producirPaquete(especificaciones);
                if (!(nuevoPaquete===undefined)){
                    console.log(cont)
             //       this.mapa[0][cont+1].push(nuevoPaquete);
                }
            }cont++;
        });
    }

    }    



module.exports=Mapa;
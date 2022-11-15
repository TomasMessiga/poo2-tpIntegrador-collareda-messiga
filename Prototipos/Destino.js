

function Destino(nombre){
    this.nombre=nombre;
    this.recibidos=[]

    this.incorporarPaqueteCola=function(paquete){
        this.recibidos.push(paquete);
    }


}  
 
module.exports=Destino;
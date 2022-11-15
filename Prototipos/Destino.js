

function Destino(nombre){
    this.nombre=nombre;
    this.recibidos=[]

    this.incorporarPaqueteCola=function(paquete){
        this.cola.push(paquete);
    }


}  
 
module.exports=Destino;
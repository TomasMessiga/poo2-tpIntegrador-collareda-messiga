const Paquete=require('../Prototipos/Producto.js');


function Paquete(destino,productos,tipoDeEnvio){

   this.destino=destino;
   this.productos=productos;
   this.tipoDeEnvio=tipoDeEnvio;


   this.cantidadDeProductos=function(){
      return (productos.lenght);
   }


}

module.exports=Paquete;
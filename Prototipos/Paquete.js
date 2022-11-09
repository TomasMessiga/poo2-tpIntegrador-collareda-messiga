
const Producto=require('../Prototipos/Producto.js');


function Paquete(destino,productos,tipoDeEnvio){

   this.destino=destino;                                                                                                                                                                                                                               
   this.productos=productos;
   this.tipoDeEnvio=tipoDeEnvio;


}

module.exports=Paquete;
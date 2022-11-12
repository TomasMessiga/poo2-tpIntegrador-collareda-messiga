
const Producto=require('../Prototipos/Producto.js');


function Paquete(destino,productos,tipoDeEnvio,id){

   this.destino=destino;                                                                                                                                                                                                                               
   this.productos=productos;
   this.tipoDeEnvio=tipoDeEnvio;
   this.id=id;      


}

module.exports=Paquete;
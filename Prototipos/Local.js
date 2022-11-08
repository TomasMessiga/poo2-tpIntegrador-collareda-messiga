const Paquete=require('../Prototipos/Paquete.js');


function Local(nombre){
    this.nombre=nombre;


     // hay que insertar en el arreglo los paquetes o se repite el paquete insertado es el mismo
    this.producirPaquetes=(cantidad,paquete)=>{
        let mapeo=function(){return paquete.crearReplica()};
        let cantidadCorrespondiente={1:new Array(1),2:new Array(2),3:new Array(3),4:new Array(4),5:new Array(5)};
        return (cantidadCorrespondiente[cantidad]).map(mapeo());
    };
}

module.exports=Local;
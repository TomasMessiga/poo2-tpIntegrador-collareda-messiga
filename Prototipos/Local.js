const Paquete=require('../Prototipos/Paquete.js');


function Local(nombre){
    this.nombre=nombre;


     // hay que insertar en el arreglo los paquetes o se repite el paquete insertado es el mismo
    this.producirPaquetes=(cantidad,paquete)=>{
        let mapeo=function(){return paquete.crearReplica();};
        let cantidadCorrespondiente={1:[0],2:[0,0],3:[0,0,0],4:[0,0,0,0],5:[0,0,0,0,0]};
        return (cantidadCorrespondiente[cantidad]).map(mapeo());
    };
}

module.exports=Local;
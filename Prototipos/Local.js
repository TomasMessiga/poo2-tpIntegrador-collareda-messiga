const Paquete=require('../Prototipos/Paquete.js');


function Local(nombre){
    this.nombre=nombre;


     // hay que insertar en el arreglo los paquetes o se repite el paquete insertado es el mismo
    this.producirPaquetes=(cantidad,paquete)=>{
        let cantidadCorrespondiente={
            1:[paquete.crearReplica()],
            2:[paquete,paquete],
            3:[paquete,paquete,paquete],
            4:[paquete,paquete,paquete,paquete],
            5:[paquete,paquete,paquete,paquete,paquete]};
        return cantidadCorrespondiente[cantidad];
    };
}

module.exports=Local;
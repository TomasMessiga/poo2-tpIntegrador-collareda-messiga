const Paquete=require('../Prototipos/Paquete.js');


function Local(nombre){
    this.nombre=nombre;


     // hay que insertar en el arreglo los paquetes o se repite el paquete insertado es el mismo
    this.producirPaquetes=(cantidad,paquete)=>{
        let mapeo=function(){return paquete.crearReplica();};
        let cantidadCorrespondiente={1:[1],2:[1,1],3:[1,1,1],4:[1,1,1,1],5:[1,1,1,1,1]};
        let retorno=(cantidadCorrespondiente[cantidad]);
        return retorno.map();
    };
}

module.exports=Local;
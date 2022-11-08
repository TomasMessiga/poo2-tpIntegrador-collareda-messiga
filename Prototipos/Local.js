const Paquete=require('../Prototipos/Paquete.js');


function Local(nombre){
    this.nombre=nombre;


     // hay que insertar en el arreglo los paquetes o se repite el paquete insertado es el mismo
    this.producirPaquetes=(cantidad,paquete)=>{
        let cantidadCorrespondiente={1:[1],2:new Array(1,1),3:new Array(1,1,1),4:new Array(1,1,1,1),5:new Array(1,1,1,1,1)};
        let retorno=[];
        retorno.concat(cantidadCorrespondiente[cantidad]);
        
        retorno.forEach(value,index)=>{
       //     retorno[indice]=paquete.crearReplica();
        });
        return retorno;
    };
}

module.exports=Local;
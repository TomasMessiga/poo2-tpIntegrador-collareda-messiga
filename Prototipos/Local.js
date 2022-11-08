const Paquete=require('../Prototipos/Paquete.js');


function Local(nombre){
    this.nombre=nombre;



    const crearUnPaquete=function(especificaciones){
        return new Paquete(especificaciones[0],especificaciones[1],especificaciones[2]);
    }


    this.producirPaquetes=(cantidad,especificaciones)=>{
        let cantidadEspecifica={1:[],2:[],3:[],4:[],5:[]};
        let arregloAuxiliar=cantidadEspecifica[cantidad];
        for (let i=0;i<cantidad;i++){
            arregloAuxiliar.push(crearUnPaquete(especificaciones));
        };
        return arregloAuxiliar;
    };
}

module.exports=Local;
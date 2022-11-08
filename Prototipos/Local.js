const { fuchsia } = require('color-name');
const Paquete=require('../Prototipos/Paquete.js');


function Local(nombre){
    this.nombre=nombre;




    const crearUnPaquete=function(especificaciones){
        return new Paquete(especificaciones[0],especificaciones[1],especificaciones[2]);
    }

    
    const cantidadCorrecta=(cantidad)=>{
        return (cantidad<=5 && cantidad>0);
    }

    const fabricarPaquetes=function(cantidad,especificaciones){
        let arregloAuxiliar=new Array();
        for (let i=0;i<cantidad && arregloAuxiliar!=undefined;i++){
            arregloAuxiliar.push(crearUnPaquete(especificaciones));
        };
        return arregloAuxiliar;
    };



    this.producirPaquetes=(cantidad,especificaciones)=>{
        return (cantidadCorrecta(cantidad)) ? (fabricarPaquetes(cantidad,especificaciones)):(undefined);
 
    };
}

module.exports=Local;
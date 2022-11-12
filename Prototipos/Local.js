const Paquete=require('../Prototipos/Paquete.js');
const Producto=require('../Prototipos/Producto.js');


function Local(nombre){
    const limiteProduccion=5;
    
    this.nombre=nombre;
<<<<<<< HEAD
=======
    this.disponibilidad=5;




>>>>>>> 563d6bf957977c0103fd1582f2bd2e6f8698d808
    const crearUnPaquete=function(especificaciones){
        return new Paquete(especificaciones[0],especificaciones[1],especificaciones[2]);
    }

    
    const cantidadCorrecta=(cantidad)=>{
        return (cantidad<=disponibilidad && cantidad>0);
    }

    const fabricarPaquetes=function(cantidad,especificaciones){
        let arregloAuxiliar=new Array();
        for (let i=0;i<cantidad;i++){
            arregloAuxiliar.push(crearUnPaquete(especificaciones));
        };disponibilidad=disponibilidad-i;
        return arregloAuxiliar;
    };



    this.producirPaquetes=(cantidad,especificaciones)=>{
        return (cantidadCorrecta(cantidad)) ? (fabricarPaquetes(cantidad,especificaciones)):(undefined);
 
    };

    this.producirPaquete=(especificaciones)=>{
        return (cantidadCorrecta(1)) ? (fabricarPaquetes(1,especificaciones)):(undefined);
    }
}

module.exports=Local;
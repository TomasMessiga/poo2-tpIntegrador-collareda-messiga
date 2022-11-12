const Paquete=require('../Prototipos/Paquete.js');
const Producto=require('../Prototipos/Producto.js');


function Local(nombre){
    const limiteProduccion=5;
    
    this.nombre=nombre;





    const crearUnPaquete=function(especificaciones){
        return new Paquete(especificaciones[0],especificaciones[1],especificaciones[2]);
    }

    
    const cantidadCorrecta=(cantidad)=>{
        return (cantidad<=5 && cantidad>0);
    }

    const fabricarPaquetes=function(cantidad,especificaciones){
        let arregloAuxiliar=new Array();
        for (let i=0;i<cantidad;i++){
            arregloAuxiliar.push(crearUnPaquete(especificaciones));
        };
        return arregloAuxiliar;
    };



    this.producirPaquetes=(cantidad,especificaciones)=>{
        return (cantidadCorrecta(cantidad)) ? (fabricarPaquetes(cantidad,especificaciones)):(undefined);
 
    };

    this.producirPaquete=(especificaciones)=>{
        return fabricarPaquetes(1,especificaciones);
    }
}

module.exports=Local;
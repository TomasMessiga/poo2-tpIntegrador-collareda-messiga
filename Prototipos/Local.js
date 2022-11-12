const Paquete=require('../Prototipos/Paquete.js');
const Producto=require('../Prototipos/Producto.js');


function Local(nombre){
    const limiteProduccion=5;
    
    this.nombre=nombre;
    
    this.disponibilidad=5;

    const crearUnPaquete=function(especificaciones){
        return new Paquete(especificaciones[0],especificaciones[1],especificaciones[2]);
    }

    
    const cantidadCorrecta=(cantidad)=>{
        return (cantidad<=this.disponibilidad && cantidad>0);
    }

    const fabricarPaquetes=function(cantidad,especificaciones){
        let arregloAuxiliar=new Array();
        for (let i=0;i<cantidad;i++){
            arregloAuxiliar.push(crearUnPaquete(especificaciones));
            this.disponibilidad=this.disponibilidad-1;
            console.log(this.disponibilidad+" prueba")
        };
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
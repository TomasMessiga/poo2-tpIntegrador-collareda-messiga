const Paquete=require('../Prototipos/Paquete.js');
const Producto=require('../Prototipos/Producto.js');


function Local(nombre){
    const limiteProduccion=5;
    
    this.nombre=nombre;
    
    var disponibilidad=5;

    const crearUnPaquete=function(especificaciones){
        disponibilidad--;
        let paquete=new Paquete(especificaciones[0],especificaciones[1],especificaciones[2],especificaciones[3]);
        console.log(paquete)
        return paquete;
    }

    this.mostrarDisponibilidad=function(){
        return disponibilidad;
    }
    
    const cantidadCorrecta=(cantidad)=>{
        return (cantidad<=disponibilidad && cantidad>0);
    }



    this.producirPaquete=(especificaciones)=>{
        return (cantidadCorrecta(1)) ? (crearUnPaquete(especificaciones)):(undefined);
    }
}

module.exports=Local; 
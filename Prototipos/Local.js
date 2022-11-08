const Paquete=require('../Prototipos/Paquete.js');


function Local(nombre){
    this.nombre=nombre;




    const crearUnPaquete=function(especificaciones){
        return new Paquete(especificaciones[0],especificaciones[1],especificaciones[2]);
    }

    const cantidadCorrecta=(cantidad)=>{
        return (cantidad<=6 && cantidad>0 && cantidad%1==0);
    }
    const fabricarPaquetes=function(cantidad,especificaciones){
        let cantidadEspecifica={1:[1],2:[1,1],3:[1,1,1],4:[1,1,1,1],5:[1,1,1,1,1]};
        let arregloAuxiliar=cantidadEspecifica[cantidad];
        arregloAuxiliar.forEach(value => {
            value=crearUnPaquete(especificaciones);
        });
    }

    this.producirPaquetes=(cantidad,especificaciones)=>{
        return (cantidadCorrecta) ? (undefined) : fabricarPaquetes(cantidad,especificaciones)

    //    for (let i=0;i<cantidad && arregloAuxiliar!=undefined;i++){
    //        arregloAuxiliar[i]=(crearUnPaquete(especificaciones));
    //    };
        
    }
}

module.exports=Local;
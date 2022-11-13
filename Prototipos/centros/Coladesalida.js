const Local=require('../Local.js');
function Destino(nombre){
    this.local='';

    this.generar=(local)=>{
        this.local=local
        return "cola de salida de"+local.nombre

    }
}

module.exports=Destino;
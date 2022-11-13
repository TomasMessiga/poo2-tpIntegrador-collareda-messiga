const Local=require('../Local.js');
function Coladesalida(){
    this.local='';

    this.generar=(local)=>{
        this.local=local
        return "cola de salida de"+local.nombre

    }
}

module.exports=Coladesalida;
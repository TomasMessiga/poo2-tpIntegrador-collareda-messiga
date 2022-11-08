
function Paquete(){

   this.aux=undefined;

   this.crearReplica=function(){
      return new Paquete();
   }

}

module.exports=Paquete;
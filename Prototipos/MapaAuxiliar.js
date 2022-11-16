const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 
const Facturacion = require('../Prototipos/centros/facturacion.js');
const Distribucion = require('../Prototipos/centros/distribucion.js');
const Calidad =require('../Prototipos/Centros/calidad.js');
const ColaSalida = require('../Prototipos/Centros/ColaSalida.js');
const Paquete = require('../Prototipos/Paquete.js');

function Mapa(){ 
    this.mapa=[];
    this.locales=[];
    this.destinos=[];

    var limites=[0,0];

    this.getLimites=function(){
        return limites;
    }




    this.determinarLimites=function(n,m){
        if (m>=4 && m>=n){
            limites=[n,m];
        } else {
            throw new Error("Los limites ingresados son incorrectos");
        }
        
    }

    this.definir=function(){
        if (limites[1]>=4 && limites[1]>=limites[1]){
            this.mapa=[];
            this.locales=[]
            this.destinos=[];
            for (let i=0;i<limites[0];i++){
                let claveLocal=String.fromCharCode(65+i);
                let claveDestino=(i+1);
                this.locales.push(new Local(claveLocal));
                this.destinos.push(new Destino(claveDestino));
                this.mapa.push([]);
                this.mapa[i].push(new ColaSalida());
            }
        }
    }




    this.incrementarTiempoPaquetes=function(){
        this.mapa.forEach(fila => {
            fila.forEach(local => {
                local.cola.forEach(paqueteAux => {
                    paqueteAux.tiempo+=1;
                });
            });
        });
    }


    this.agregarCentroParaMapas=function(nombre){
        let centro=undefined;
        if (nombre=="facturacion"){
            centro=new Facturacion();
        } else if (nombre=="distribucion"){
            centro=new Distribucion();
        } else if (nombre=="calidad"){
            centro=new Calidad();
        }
        this.mapa.forEach(element => {
            element.push(centro);
        });
    }




    this.buscarPaquetePorID=function(numero){
        
        for (let i=0;i<this.mapa.length;i++){
            for (let j=0;j<this.mapa[i].length;j++){
                for (let k=0;k<this.mapa[i][j].cola.length;k++){
                    if (this.mapa[i][j].cola[k].id===numero){
                        return this.mapa[i][j].cola[k];
                    }
                }    
            }
        }
        return undefined;
    }
    
    this.buscarCoordenadasPaquetePorID=function(numero){
        const proto=Object.getPrototypeOf;
        for (let i=0;i<this.mapa.length;i++){
            for (let j=0;j<this.mapa[i].length;j++){
                for (let k=0;k<this.mapa[i][j].cola.length;k++){
                    if (proto(this.mapa[i][j].cola[k])==proto(new Paquete())){
                        if (this.mapa[i][j].cola[k].id===numero){
                            return [i,j,k];
                        }
                    } else { 
                        if ((this.mapa[i][j].cola[k][0]).id===numero){
                            return [i,j,k];
                        }
                    }

                }    
            }
        }
        return undefined;
    }




    this.util=function(){
        return (this.mapa[0].length==limites[1]);
    }

    var contadorPaquetes=0;

    this.modificarContadorPaquetes=function(){
        contadorPaquetes++;
    }
    this.mostrarContadorPaquetes=function(){
        return contadorPaquetes;
    }

    this.desplazamientoVertical=function(paquete){
        var pos=this.buscarCoordenadasPaquetePorID(paquete.id);
        var destino=paquete.destino-1;
        var fila=limites[0] ;
        var columna=limites[1];
        if ((fila-destino)-(pos[0]+1)<=columna-(pos[0]+1) && (fila-destino)-(pos[0]-1)<=columna-(pos[0]+1)){
            return [1,-1];
        }
        if ((fila-destino)-(pos[0]+1)<=columna-(pos[0]+1))
        { 
            return [1,0];
        }
        if ((fila-destino)-(pos[0]-1)<=columna-(pos[0]+1))
        {
            return [0,-1];
        }
        else{
            return [0,0];
        } 



    }



    }    



module.exports=Mapa;
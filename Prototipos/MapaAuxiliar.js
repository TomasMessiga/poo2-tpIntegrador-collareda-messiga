const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 
const Facturacion = require('../Prototipos/centros/facturacion.js');
const Distribucion = require('../Prototipos/centros/distribucion.js');
const Calidad = require('../Prototipos/centros/calidad.js');
const ColaSalida = require('./Centros/ColaSalida.js');

function Mapa(){ 
    this.mapa=[];
    this.locales=[];
    this.destinos=[];

    var limites=[0,0];

    this.determinarLimites=function(n,m){
        if (m>=4 && m>=n)
        limites=[n,m];
    }
    this.definir=function(){
        if (limites[1]>=4 && limites[1]>=limites[1]){
            this.mapa=[];
            this.locales=[]
            this.destinos=[];
            for (let i=0;i<limites[0];i++){
                let claveLocal=String.fromCharCode(65+i);
                let claveDestino=(i+1).toString();
                this.locales.push(new Local(claveLocal));
                this.mapa.push([]);
                this.mapa[i].push(new ColaSalida());
                this.destinos.push(new Destino(claveDestino));
            }
        }
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




    }    



module.exports=Mapa;
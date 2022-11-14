const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 

function Mapa(){ 
    this.mapa=[];
    var limites=[0,0];
    this.locales=[];
    this.destinos=[];

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
                this.destinos.push(new Destino(claveDestino));
            }
        }

    }



    }    



module.exports=Mapa;
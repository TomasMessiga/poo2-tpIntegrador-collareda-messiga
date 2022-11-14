const Sistema=require('../Prototipos/SistemaAuxiliar.js');
const Mapa=require('../Prototipos/MapaAuxiliar.js');
const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 
const Paquete = require('../Prototipos/Paquete.js');
const Calidad =require('../Prototipos/Centros/calidad.js');
const Distrbucion = require('../Prototipos/Centros/distribucion.js');
const Facturacion = require('../Prototipos/Centros/facturacion.js');

let calidad= new Calidad()
let distrbucion=new Distrbucion()
let facturacion=new Facturacion()


test("crear un mapa (1 local)",()=>{
    let mapa=new Mapa();
    let local=new Local('A');
    let destino= new Destino(1); 
    mapa.determinarLimites(1,4);
    mapa.definir();
    let equivalencia=[];
    expect(mapa.locales).toStrictEqual(local);
})
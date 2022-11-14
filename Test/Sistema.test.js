const Sistema=require('../Prototipos/SistemaAuxiliar.js');
const Mapa=require('../Prototipos/MapaAuxiliar.js');
const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 
const Paquete = require('../Prototipos/Paquete.js');
const Calidad =require('../Prototipos/Centros/calidad.js');
const Distrbucion = require('../Prototipos/Centros/distribucion.js');
const Facturacion = require('../Prototipos/Centros/facturacion.js');
const ColaSalida = require('../Prototipos/Centros/ColaSalida.js');

let colaSalida= new ColaSalida()
let calidad= new Calidad()
let distrbucion=new Distrbucion()
let facturacion=new Facturacion()


test("crear un mapa (1 local)",()=>{
    let mapa=new Mapa();
    let local=new Local('A');
    mapa.determinarLimites(1,4);
    mapa.definir();
    expect(mapa.locales[0].nombre).toStrictEqual(local.nombre);
})


test("crear un mapa (1 destino)",()=>{
    let mapa=new Mapa();
    let destino= new Destino('1'); 
    mapa.determinarLimites(1,4);
    mapa.definir();
    expect(mapa.destinos[0].nombre).toStrictEqual(destino.nombre);
})


test("crear un mapa (insertar centros)",()=>{
    let mapa=new Mapa();
    let destino= new Destino('1'); 
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("distribucion");
    expect(mapa.mapa[0]).toStrictEqual(1);
})
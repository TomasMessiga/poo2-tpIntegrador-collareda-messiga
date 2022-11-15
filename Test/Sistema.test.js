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
let distribucion=new Distrbucion()
let facturacion=new Facturacion()

const proto=Object.getPrototypeOf;

test("crear un mapa (1 local)",()=>{
    let mapa=new Mapa();
    let local=new Local('A');
    mapa.determinarLimites(1,4);
    mapa.definir();
    expect(proto(mapa.locales[0])).toStrictEqual(proto(local));
})


test("crear un mapa (1 destino)",()=>{
    let mapa=new Mapa();
    let destino= new Destino('1'); 
    mapa.determinarLimites(1,4);
    mapa.definir();
    expect(proto(mapa.destinos[0])).toStrictEqual(proto(destino));
})

test("crear un mapa (tiene cola de salida)",()=>{
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    expect(proto(mapa.mapa[0][0])).toStrictEqual(proto(colaSalida));
})

test("crear un mapa (insertar 1 centros)",()=>{
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    expect(proto(mapa.mapa[0][1])).toStrictEqual(proto(facturacion));
})

test("crear un mapa (insertar 2 centros)",()=>{
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    expect(proto(mapa.mapa[0][2])).toStrictEqual(proto(calidad));
})
test("crear un mapa (insertar 3 centros)",()=>{
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");
    expect(proto(mapa.mapa[0][3])).toStrictEqual(proto(distribucion));
})

test("mapa apto para ser utilizado",()=>{
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");
    expect(mapa.util()).toStrictEqual(true);
})
test("mapa apto para ser utilizado",()=>{
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    expect(mapa.util()).toStrictEqual(false);
})


test("funcionamiento de sistema",()=>{
    let sistema=new Sistema();
    sistema.incrementarTiempo();
    expect(sistema.getTiempo()).toStrictEqual(1);
})

test("funcionamiento de sistema reinicio",()=>{
    let sistema=new Sistema();
    sistema.incrementarTiempo();
    sistema.incrementarTiempo();
    sistema.incrementarTiempo();
    sistema.reiniciarTiempo();
    expect(sistema.getTiempo()).toStrictEqual(0);
})
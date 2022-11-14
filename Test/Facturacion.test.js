const Sistema=require('../Prototipos/Sistema.js');
const Mapa=require('../Prototipos/Mapa.js');
const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 
const Paquete = require('../Prototipos/Paquete.js');
const Calidad =require('../Prototipos/Centros/calidad.js');
const Distrbucion = require('../Prototipos/Centros/distribucion.js');
const Facturacion = require('../Prototipos/Centros/facturacion.js');
const Coladesalida = require('../Prototipos/Centros/Coladesalida.js');
let coladesalida=new Coladesalida()
let calidad= new Calidad()
let distrbucion=new Distrbucion()
let facturacion=new Facturacion()
test('prueba de fabrica',()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete(1,1,1,1);
    let paquete2=new Paquete(2,2,2,2);
    mapaAuxiliar.centro([coladesalida,facturacion,calidad,distrbucion])
    mapaAuxiliar.generar(local,destino);
    sistema.especificarFabricacion('a',mapaAuxiliar,[1,1,1,1])
    sistema.especificarFabricacion('a',mapaAuxiliar,[2,2,2,2]);
    sistema.mover(mapaAuxiliar,paquete)//[[coladesalida,facturacion,calidad,distrbucion],[[paquete2],[paquete],[],[]]]
})
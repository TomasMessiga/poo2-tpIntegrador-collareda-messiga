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
    let paquete3=new Paquete(3,3,3,3);
    let paquete4=new Paquete(4,4,4,4);
    mapaAuxiliar.centro([coladesalida,facturacion,calidad,distrbucion])
    mapaAuxiliar.generar(local,destino);
    sistema.mover(mapaAuxiliar,paquete)
    sistema.mover(mapaAuxiliar,paquete2)
    sistema.mover(mapaAuxiliar,paquete3)
    sistema.mover(mapaAuxiliar,paquete4)
    //sistema.mover(mapaAuxiliar,paquete2)
    //sistema.mover(mapaAuxiliar,paquete3)
    sistema.mover(mapaAuxiliar,paquete4)
 
   //[[coladesalida,facturacion,calidad,distrbucion],[[paquete2],[paquete],[],[]]]
    expect(mapaAuxiliar.mapa).toStrictEqual([[coladesalida,facturacion,calidad,distrbucion],[[paquete,paquete2,paquete3],[paquete4],[],[]]]);
})
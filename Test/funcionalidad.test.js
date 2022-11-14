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

test("incrementar una unidad de tiempo",()=>{
    let sistema=new Sistema();
    sistema.incrementarTiempo();
    expect(sistema.getTiempo()).toBe(1); 
})
test("mover 1 pasos pauqete en mapa",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete(1,1,1,1);
    mapaAuxiliar.centro([coladesalida,facturacion,calidad,distrbucion])
    mapaAuxiliar.generar(local,destino);
    sistema.mover(mapaAuxiliar,paquete)
    expect(mapaAuxiliar.mapa).toStrictEqual([[coladesalida,facturacion,calidad,distrbucion],[[paquete],[],[],[]]]);
})
test("mover 2 pasos pauqete en mapa 1 ",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete(1,1,1,1);
    mapaAuxiliar.centro([coladesalida,facturacion,calidad,distrbucion])
    mapaAuxiliar.generar(local,destino);
    sistema.mover(mapaAuxiliar,paquete)
    sistema.mover(mapaAuxiliar,paquete)
    expect(mapaAuxiliar.mapa).toStrictEqual([[coladesalida,facturacion,calidad,distrbucion],[[],[paquete],[],[]]]);
})

test("mover 2 pasos pauqete en mapa 2 ",()=>{
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
    expect(mapaAuxiliar.mapa).toStrictEqual([[coladesalida,facturacion,calidad,distrbucion],[[paquete2],[paquete],[],[]]]);
})
test("fabricar paquetes para un mapa 3 ",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(1)
    let paquete=new Paquete(1,1,1,1);
    mapaAuxiliar.centro([coladesalida,facturacion,calidad,distrbucion])
    mapaAuxiliar.generar(local,destino);
    sistema.especificarFabricacion('a',mapaAuxiliar,[1,1,1,1]);
    expect(mapaAuxiliar.mapa).toStrictEqual([[coladesalida,facturacion,calidad,distrbucion],[[paquete],[],[],[]]]);
})
test("fabricar paquetes para un mapa 4",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(1)
    let paquete=new Paquete(1,1,1,1);
    let paquete2=new Paquete(2,2,2,2);
    let local2=new Local('b')
    let destino2=new Destino(2)
    let local3=new Local('c')
    let destino3=new Destino(3)
    mapaAuxiliar.centro([coladesalida,facturacion,calidad,distrbucion])
    mapaAuxiliar.generar(local,destino);
    mapaAuxiliar.generar(local2,destino2);
    mapaAuxiliar.generar(local3,destino3);
    sistema.especificarFabricacion('a',mapaAuxiliar,[1,1,1,1]);
    sistema.especificarFabricacion('b',mapaAuxiliar,[2,2,2,2]);
    expect(mapaAuxiliar.mapa).toStrictEqual([[coladesalida,facturacion,calidad,distrbucion],[[paquete],[],[],[]],[[paquete2],[],[],[]],[[],[],[],[]]]);
})
// test("avanzar tiempo",()=>{
//     let sistema=new Sistema();
//     let mapaAuxiliar=new Mapa();
//     let local=new Local('a')
//     let destino=new Destino(1)
//     let paquete=new Paquete(1,1,1,1);
//     let paquete2=new Paquete(2,2,2,2);
//     let local2=new Local('b')
//     let destino2=new Destino(2)
//     let local3=new Local('c')
//     let destino3=new Destino(3)
//     mapaAuxiliar.centro([coladesalida,facturacion,calidad,distrbucion])
//     mapaAuxiliar.generar(local,destino);
//     mapaAuxiliar.generar(local2,destino2);
//     mapaAuxiliar.generar(local3,destino3);
//     sistema.especificarFabricacion('a',mapaAuxiliar,[1,1,1,1]);
//     sistema.especificarFabricacion('b',mapaAuxiliar,[2,2,2,2]);
//     sistema.avanzartiempo(mapaAuxiliar)
//     expect(mapaAuxiliar.mapa).toStrictEqual([[coladesalida,facturacion,calidad,distrbucion],[[],[paquete],[],[]],[[],[paquete2],[],[]],[[],[],[],[]]]);
// })

 test("avanzar tiempo pero 4 paquete 1 queda en cola de salida",()=>{
         let sistema=new Sistema();
         let mapaAuxiliar=new Mapa();
        let local=new Local('a')
       let destino=new Destino(1)

       mapaAuxiliar.centro([coladesalida,facturacion,calidad,distrbucion])
       mapaAuxiliar.generar(local,destino);
       sistema.especificarFabricacion('a',mapaAuxiliar,[1,1,1,1])
       sistema.especificarFabricacion('a',mapaAuxiliar,[2,2,2,2]);
       sistema.especificarFabricacion('a',mapaAuxiliar,[3,3,3,3]);
       sistema.especificarFabricacion('a',mapaAuxiliar,[4,4,4,4]);
       sistema.especificarFabricacion('a',mapaAuxiliar,[5,5,5,5]);
       aux=sistema.avanzartiempo(mapaAuxiliar)
       let paquete=new Paquete(5,5,5,5);
       let paquete2=new Paquete(4,4,4,4);
       let paquete3=new Paquete(3,3,3,3);
  
   
       expect(mapaAuxiliar.mapa[1][1]).toStrictEqual([paquete,paquete2,paquete3]);
    })
 
 



























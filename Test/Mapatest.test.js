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
test("centro agregar",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0) 
    mapa.centro([coladesalida,facturacion,calidad,distrbucion])
    expect(mapa.generar(local,destino)).toStrictEqual([[coladesalida,facturacion,calidad,distrbucion],[[],[],[],[]]])
})
test("generar matriz",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0) 
    mapa.centro([coladesalida,facturacion,calidad,distrbucion])
    expect(mapa.generar(local,destino)).toStrictEqual([[coladesalida,facturacion,calidad,distrbucion],[[],[],[],[]]])
})
test("generar matriz",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0) 
    mapa.centro([coladesalida,facturacion,calidad,distrbucion])
    mapa.generar(local,destino)   
    mapa.generar(local,destino)
    expect(mapa.generar(local,destino)).toStrictEqual([[coladesalida,facturacion,calidad,distrbucion],[[],[],[],[]],[[],[],[],[]],[[],[],[],[]]])
})
test("buscar pauqete cuando hay 2 paquetes",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0)
    let paquete = new Paquete(1,1,1,1)
    let paquete2 = new Paquete(2,2,2,2)
    mapa.centro([coladesalida,facturacion,calidad,distrbucion])
    mapa.generar([local,destino]) 
    mapa.mapa[1][0].push(paquete2)
    mapa.mapa[1][0].push(paquete)
    expect(mapa.buscar(paquete)).toStrictEqual([1,0,1])
})
test("buscar pauqete cuando hay vario paquetes",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0)
    let paquete = new Paquete(1,1,1,1)
    let paquete3 = new Paquete(3,3,3,3)
    let paquete2 = new Paquete(2,2,2,2)
    let local2=new Local('b')
    let destino2= new Destino(1)
    mapa.centro([coladesalida,facturacion,calidad,distrbucion])
    mapa.generar([local2,destino2])
    mapa.generar([local,destino]) 
    mapa.mapa[1][0].push(paquete2)
    mapa.mapa[1][0].push(paquete)
    mapa.mapa[2][2].push(paquete3)
    expect(mapa.buscar(paquete)).toStrictEqual([1,0,1]) 
})
test("buscar todo los pauqete q hay ",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0)
    let paquete = new Paquete(1,1,1,1)
    let paquete3 = new Paquete(3,3,3,3)
    let paquete2 = new Paquete(2,2,2,2)
    let local2=new Local('b')
    let destino2= new Destino(1)
    mapa.centro([coladesalida,facturacion,calidad,distrbucion])
    mapa.generar([local2,destino2])
    mapa.generar([local,destino]) 
    mapa.mapa[1][0].push(paquete2)
    mapa.mapa[1][0].push(paquete)
    mapa.mapa[2][2].push(paquete3)
    expect(mapa.buscartodos(paquete)).toStrictEqual() 
})






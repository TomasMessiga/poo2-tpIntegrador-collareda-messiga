const Mapa=require('../Prototipos/Mapa.js');
const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 
const Paquete = require('../Prototipos/Paquete.js');


test("generar matriz",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0) 
    expect(mapa.generar(local,destino)).toStrictEqual([["cola de salida de locas",[]],["Facturación",[]],["Calidad",[]] , ["Distribución",[]]])
})
test("generar matriz",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0)
    mapa.generar([local,destino]) 
    expect(mapa.generar(local,destino)).toStrictEqual([["cola de salida de locas",[],[]],["Facturación",[],[]],["Calidad",[],[]] , ["Distribución",[],[]]])
})
test("generar matriz",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0)
    mapa.generar([local,destino]) 
    expect(mapa.generar(local,destino)).toStrictEqual([["cola de salida de locas",[],[]],["Facturación",[],[]],["Calidad",[],[]] , ["Distribución",[],[]]])
})
test("buscar pauqete",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0)
    let paquete = new Paquete(1,1,1,1)
    mapa.generar([local,destino]) 
    mapa.buscar(paquete)
    expect(mapa.buscar(paquete)).toStrictEqual("fila:"+0+"columna:"+1+"posdecola:"+0)
})



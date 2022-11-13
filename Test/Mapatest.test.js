const Mapa=require('../Prototipos/Mapa.js');
const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 
const Paquete = require('../Prototipos/Paquete.js');


test("generar matriz",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0) 
    expect(mapa.generar(local,destino)).toStrictEqual()
})
test("buscar pauqete cuando hay 2 paquetes",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0)
    let paquete = new Paquete(1,1,1,1)
    let paquete3 = new Paquete(1,1,1,3)
    let paquete2 = new Paquete(1,1,1,2)
    mapa.generar([local,destino]) 
    mapa.mapa[0][1].push(paquete2)
    mapa.mapa[1][1].push(paquete3)
    mapa.mapa[1][1].push(paquete)
    expect(mapa.buscar(paquete)).toStrictEqual([1,1,1])
})




const Mapa=require('../Prototipos/Mapa.js');
const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 
const Paquete = require('../Prototipos/Paquete.js');


test("generar matriz",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0) 
    expect(mapa.generar(local,destino)).toStrictEqual([["cola de salida de local","Facturación","Calidad","Distibucion"],[[],[],[],[]]])
})
test("buscar pauqete cuando hay 2 paquetes",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0)
    let paquete = new Paquete(1,1,1,1)
    let paquete3 = new Paquete(1,1,1,3)
    let paquete2 = new Paquete(1,1,1,2)
    let paquete4 = new Paquete(1,1,1,4)
    mapa.generar([local,destino]) 
    mapa.mapa[1][0].push(paquete2)
    mapa.mapa[1][1].push(paquete3)
    mapa.mapa[1][2].push(paquete4)
    mapa.mapa[1][0].push(paquete)
    expect(mapa.buscar(paquete)).toStrictEqual([1,3,1])
})




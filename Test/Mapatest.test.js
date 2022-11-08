const Mapa=require('../Prototipos/Mapa.js');
const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 
test("generar matriz",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0) 
    expect(mapa.generar(local,destino)).toStrictEqual([["cola de salida de locas",0],["Facturación",0],["Calidad",0] , ["Distribución",0]])
})
test("generar matriz",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0)
    mapa.generar(local,destino) 
    expect(mapa.generar(local,destino)).toStrictEqual([["cola de salida de locas",0,0],["Facturación",0,0],["Calidad",0,0] , ["Distribución",0,0]])
})



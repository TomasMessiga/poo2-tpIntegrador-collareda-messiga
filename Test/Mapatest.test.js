const Mapa=require('../Prototipos/Mapa.js');
const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js');
test("generar matriz",()=>{
    let mapa=new Mapa();
    let local=new Local('a')
    let destino= new Destino(0)
    expect(mapa.generar(local,destino)).toStrictEqual(["cola de salida de locas"],["Facturación"],["Calidad"] , ["Distribución"])
})


const Mapa=require('../Prototipos/Mapa.js');

test("generar matriz",()=>{
    let mapa=new Mapa();

    expect(mapa.generar()).toStrictEqual(["cola de salida de locas","Facturación","Calidad" , "Distribución"])
})
test("generar matriz con cant de locales",()=>{
    let mapacondestion=new Mapa();

    expect(mapacondestino.generar(1)).toStrictEqual([["cola de salida de locas",0],["Facturación",0],["Calidad",0] , ["Distribución",0]])
})
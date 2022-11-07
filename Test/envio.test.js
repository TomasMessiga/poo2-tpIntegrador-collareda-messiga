const Mapa=require('../Prototipos/Mapa.js');

test("generar matriz",()=>{
    let mapa=new Mapa();

    expect(mapa.generar()).toStrictEqual(["cola de salida de locas","Facturación","Calidad" , "Distribución"])
})
test("generar matriz con cant de locales",()=>{
    let mapacondestino=new Mapa();

    expect(mapacondestino.generar(1)).toBe([["cola de salida de locas",],["Facturación",],["Calidad",] , ["Distribución",]])
})
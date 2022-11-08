const Mapa=require('../Prototipos/Mapa.js');

test("generar matriz",()=>{
    let mapa=new Mapa();

    expect(mapa.generar()).toStrictEqual([["cola de salida de locas"],["Facturación"],["Calidad"] , ["Distribución"]])
})
test("generar matriz con cant de locales",()=>{
    let mapacondestino=new Mapa();


    expect(mapacondestino.generar(1)).toStrictEqual([["cola de salida de locas",0],["Facturación",0],["Calidad",0] , ["Distribución",0]])
    
})
test("generar matriz con cant de locales",()=>{
    let mapacondestino=new Mapa();
    let mapacondestino2=new Mapa();
    let mapacondestino3=new Mapa();

    expect(mapacondestino.generar(1)).toStrictEqual([["cola de salida de locas",0],["Facturación",0],["Calidad",0] , ["Distribución",0]])
    expect(mapacondestino2.generar(2)).toStrictEqual([["cola de salida de locas",0,0],["Facturación",0,0],["Calidad",0,0] , ["Distribución",0,0]])
    expect(mapacondestino3.generar(3)).toStrictEqual([["cola de salida de locas",0,0,0],["Facturación",0,0,0],["Calidad",0,0,0] , ["Distribución",0,0,0]])
})
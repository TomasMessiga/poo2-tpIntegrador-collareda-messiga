const Mapa=require('../Prototipos/Mapa.js');

test("generar matriz",()=>{
    let mapa=new Mapa();

    expect(mapa.generar()).toStrictEqual([["cola de salida de locas"],["Facturación"],["Calidad"] , ["Distribución"]])
})
test("generar matriz con cant de locales",()=>{
    let mapacondestino=new Mapa();


    expect(mapacondestino.generar(1)).toStrictEqual([["cola de salida de locas",0],["Facturación",0],["Calidad",0] , ["Distribución",0]])
    
})
est("generar matriz con cant mas de 1  de locales",()=>{
    let mapacondestino=new Mapa(); 


    expect(mapacondestino.generar(4)).toStrictEqual([["cola de salida de locas",0,0,0,0],["Facturación",0,0,0,0],["Calidad",0,0,0,0] , ["Distribución",0,0,0,0]])
    
})


Mapa=requiere('../Protoptipos/Mapa.js');

test("generar matriz",()=>{
    let mapa=new Mapa();

    expect(mapa.generar()).toStrictEqual(["colaa de salida de locas","Facturación","Calidad" , "Distribución"])
})
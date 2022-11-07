const Mapa=require('../Prototipos/Mapa.js');

test("generar matriz",()=>{
    let mapa=new Mapa();

    expect(mapa.generar()).toStrictEqual(["cola de salida de locas","Facturación","Calidad" , "Distribución"])
})

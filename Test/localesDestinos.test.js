//const Mapa=require('../Prototipos/Mapa.js');

test("definir nomenclatura",()=>{
    let nomenclatura=new Nomenclatura();

    expect(nomenclatura.analizar()).toStrictEqual(undefined)
})

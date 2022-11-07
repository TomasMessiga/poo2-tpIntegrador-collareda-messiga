//const Mapa=require('../Prototipos/Mapa.js');

test("definir local",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.nombre).toStrictEqual(nombre)
})

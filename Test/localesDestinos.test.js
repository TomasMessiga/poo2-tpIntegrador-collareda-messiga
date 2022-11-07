const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js');

test("definir local",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.nombre).toStrictEqual(nombre)
})
test("definir destino",()=>{
    let nombre="a";
    let destino=new Destino(nombre);
    expect(destino.nombre).toStrictEqual(nombre)
})

test("local producir 1 paquete",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquete(1)).toStrictEqual(1);
})
test("local producir 2 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquete(2)).toStrictEqual(2);
})

test("local producir 5 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquete(5)).toStrictEqual(5);
})

test("local producir 6 paquetes (error)",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquete(6)).toStrictEqual(undefined);
})
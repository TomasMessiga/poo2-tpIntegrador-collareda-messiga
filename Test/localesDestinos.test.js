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
    expect(local.producirPaquetes()).toStrictEqual(1);
})
test("local producir 1 paquete (alternativo)",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquetes(1)).toStrictEqual(1);
})
test("local producir 2 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquetes(2)).toStrictEqual(2);
})
test("local producir 3 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquetes(2)).toStrictEqual(2);
})
test("local producir 4 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquetes(2)).toStrictEqual(2);
})

test("local producir 5 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquetes(5)).toStrictEqual(5);
})

test("local producir 6 paquetes (error)",()=>{
    let nombre=2;
    let local=new Local(nombre);
    expect(local.producirPaquetes(7)).toStrictEqual(undefined);
})
test("local producir -2 paquetes (error)",()=>{
    let nombre=2;
    let local=new Local(nombre);
    expect(local.producirPaquetes(-2)).toStrictEqual(undefined);
})
const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js');
const Paquete=require('../Prototipos/Paquete.js');

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
    let nombre=1;
    let local=new Local(nombre);
    let paquete=new Paquete();
    expect(local.producirPaquetes(1)).toStrictEqual([paquete]);
})

test("local producir 2 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquetes(2)).toStrictEqual(paquete,paquete);
})
test("local producir 3 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquetes(3)).toStrictEqual(paquete,paquete,paquete);
})
test("local producir 4 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquetes(4)).toStrictEqual(paquete,paquete,paquete,paqueta);
})

test("local producir 5 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquetes(5)).toStrictEqual(paquete,paquete,paquete,paqueta);
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
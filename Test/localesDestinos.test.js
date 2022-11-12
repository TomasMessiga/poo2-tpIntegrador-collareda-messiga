const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js');
const Paquete=require('../Prototipos/Paquete.js');
const Producto=require('../Prototipos/Producto.js');


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
    let muestraPaquetes=[];
    let paquete=new Paquete(1,1,1);    
    muestraPaquetes.push(paquete);
    expect(local.producirPaquetes(1,[1,1,1])).toStrictEqual(muestraPaquetes);
})

test("local producir 2 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    let muestraPaquetes=[];
    let paquete=new Paquete(1,1,1);    
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    expect(local.producirPaquetes(2,[1,1,1])).toStrictEqual(muestraPaquetes);
})
test("local producir 3 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    let muestraPaquetes=[];
    let paquete=new Paquete(1,1,1);    
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    expect(local.producirPaquetes(3,[1,1,1])).toStrictEqual(muestraPaquetes);
})
test("local producir 4 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    let muestraPaquetes=[];
    let paquete=new Paquete(1,1,1);    
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    expect(local.producirPaquetes(4,[1,1,1])).toStrictEqual(muestraPaquetes);
})

test("local producir 5 paquetes",()=>{
    let nombre=0;
    let local=new Local(nombre);
    let muestraPaquetes=[];
    let paquete=new Paquete(1,1,1);    
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    expect(local.producirPaquetes(5,[1,1,1])).toStrictEqual(muestraPaquetes);
})

test("local producir 6 paquetes (error)",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquetes(7,[1,1,1])).toStrictEqual(undefined);
})
test("local producir -2 paquetes (error)",()=>{
    let nombre=0;
    let local=new Local(nombre);
    expect(local.producirPaquetes(-2,[1,1,1])).toStrictEqual(undefined);
})

test("local producir 5 paquetes (disponibilidad cero)",()=>{
    let nombre=0;
    let local=new Local(nombre);
    let muestraPaquetes=[];
    let paquete=new Paquete(1,1,1);    
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    let paquetes=local.producirPaquetes(5,[1,1,1]);
    expect(local.disponibilidad).toStrictEqual(0);
})
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
    expect(local.producirPaquete([1,1,1])).toStrictEqual(muestraPaquetes);
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
    expect(local.mostrarDisponibilidad()).toStrictEqual(0);
})

test("local producir 6 paquetes (solo produce 5)",()=>{
    let nombre=0;
    let local=new Local(nombre);
    let muestraPaquetes=[];
    let paquete=new Paquete(1,1,1);    
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    muestraPaquetes.push(paquete);
    let paquetesProducidos=local.producirPaquetes(5,[1,1,1]);
    paquetesProducidos.push(local.producirPaquete([1,1,1]));
    if (paquetesProducidos[5]===undefined){paquetesProducidos.splice(5)}
    expect(paquetesProducidos).toStrictEqual(muestraPaquetes);
})

test("local producir 6 paquetes (dos locales)",()=>{
    let nombre=0;
    let local_1=new Local(nombre);
    let local_2=new Local(nombre);
    let muestraPaquetes=[];
    let paquetesProducidos_1=local_1.producirPaquetes(5,[1,1,1]);
    let paquetesProducidos_2=local_2.producirPaquetes(3,[1,1,1]);
    paquetesProducidos_1.push(local_2.producirPaquete([1,1,1]));
    paquetesProducidos_2.push(local_2.producirPaquete([1,1,1]));
    expect(local_1.mostrarDisponibilidad()).toStrictEqual(local_2.mostrarDisponibilidad()-1);
})
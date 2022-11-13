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
    let paquete=new Paquete(1,1,1);    
    expect(local.producirPaquete([1,1,1])).toStrictEqual(paquete);
})




test("local producir 6 paquetes (error)",()=>{
    let nombre=0;
    let local=new Local(nombre);
    let paquete=local.producirPaquete([1,1,1]);
    paquete=local.producirPaquete([1,1,1]);
    paquete=local.producirPaquete([1,1,1]);
    paquete=local.producirPaquete([1,1,1]);
    paquete=local.producirPaquete([1,1,1]);
    paquete=local.producirPaquete([1,1,1]);
    expect(local.producirPaquetes(paquete)).toStrictEqual(undefined);
})




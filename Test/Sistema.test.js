const Sistema=require('../Prototipos/SistemaAuxiliar.js');
const Mapa=require('../Prototipos/MapaAuxiliar.js');
const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 
const Paquete = require('../Prototipos/Paquete.js');
const Calidad =require('../Prototipos/Centros/calidad.js');
const Distrbucion = require('../Prototipos/Centros/distribucion.js');
const Facturacion = require('../Prototipos/Centros/facturacion.js');
const ColaSalida = require('../Prototipos/Centros/ColaSalida.js');
const { array } = require('yargs');

let colaSalida= new ColaSalida()
let calidad= new Calidad()
let distribucion=new Distrbucion()
let facturacion=new Facturacion()

const proto=Object.getPrototypeOf;

test("crear un mapa (1 local)",()=>{
    let mapa=new Mapa();
    let local=new Local('A');
    mapa.determinarLimites(1,4);
    mapa.definir();
    expect(proto(mapa.locales[0])).toStrictEqual(proto(local));
})


test("crear un mapa (1 destino)",()=>{
    let mapa=new Mapa();
    let destino= new Destino(1); 
    mapa.determinarLimites(1,4);
    mapa.definir();
    expect(proto(mapa.destinos[0])).toStrictEqual(proto(destino));
})

test("crear un mapa (tiene cola de salida)",()=>{
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    expect(proto(mapa.mapa[0][0])).toStrictEqual(proto(colaSalida));
})

test("crear un mapa (insertar 1 centros)",()=>{
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    expect(proto(mapa.mapa[0][1])).toStrictEqual(proto(facturacion));
})

test("crear un mapa (insertar 2 centros)",()=>{
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    expect(proto(mapa.mapa[0][2])).toStrictEqual(proto(calidad));
})
test("crear un mapa (insertar 3 centros)",()=>{
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");
    expect(proto(mapa.mapa[0][3])).toStrictEqual(proto(distribucion));
})

test("mapa apto para ser utilizado",()=>{
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");
    expect(mapa.util()).toStrictEqual(true);
})
test("mapa apto para ser utilizado",()=>{
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    expect(mapa.util()).toStrictEqual(false);
})


test("funcionamiento de sistema",()=>{
    let sistema=new Sistema();
    sistema.incrementarTiempo(new Mapa());
    expect(sistema.getTiempo()).toStrictEqual(1);
})



test("funcionamiento de sistema (fabricar un paquete)",()=>{
    let sistema=new Sistema();
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido",1]);  
    expect(mapa.mapa[0][0].cola[0]).toStrictEqual(new Paquete(1,"reloj","muy rapido",1));
})


test("funcionamiento de sistema (fabricar varios paquete)",()=>{
    let sistema=new Sistema();
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido",1]);  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido",2]);  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido",3]);  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido",4]);  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido",5]);  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido",6]);  
    expect(mapa.mapa[0][0].cola.length).toStrictEqual(sistema.contarPaquetes(mapa));
})



test("funcionamiento de sistema (mover de cola de salida a un centro)",()=>{
    let sistema=new Sistema();
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido",1]);
    sistema.incrementarTiempo(mapa);
    let unPaquete=new Paquete(1,"reloj","muy rapido",1); unPaquete.tiempo=1;
    expect(mapa.buscarPaquetePorID(1)).toStrictEqual(unPaquete);
})

test("funcionamiento de sistema (mover de cola de salida a un centro varios paquetes)",()=>{
    let sistema=new Sistema();
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.incrementarTiempo(mapa);
    expect(mapa.mostrarContadorPaquetes()).toStrictEqual(5);
})


test("funcionamiento de sistema (contador de paquetes)",()=>{
    let sistema=new Sistema();
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.incrementarTiempo(mapa);
 //   expect(mapa.mostrarContadorPaquetes()).toStrictEqual(5);
})

test("funcionamiento de sistema (mover de cola de salida a dos centros)",()=>{
    let sistema=new Sistema();
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.incrementarTiempo(mapa);                 //   console.log(mapa.mapa[0])
    sistema.incrementarTiempo(mapa);              //      console.log(mapa.mapa[0])
    let unPaquete=new Paquete(1,"reloj","muy rapido",1); unPaquete.tiempo=2;
//    expect(mapa.mapa[0][2].cola).toStrictEqual([unPaquete]);
})

test("funcionamiento de sistema (mover de cola de salida a tres centros)",()=>{
    let sistema=new Sistema();
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    let unPaquete=new Paquete(1,"reloj","muy rapido",1); unPaquete.tiempo=3;
//    expect(mapa.mapa[0][3].cola).toStrictEqual([unPaquete]);
})


test("funcionamiento de sistema (mover de cola de salida a destino)",()=>{
    let sistema=new Sistema();
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    let unPaquete=new Paquete(1,"reloj","muy rapido",1); unPaquete.tiempo=4;
 //   expect(mapa.destinos[0].recibidos).toStrictEqual([unPaquete]);
})


test("funcionamiento de sistema (mover de cola de salida a destino)",()=>{
    let sistema=new Sistema();
    let mapa=new Mapa();
    mapa.determinarLimites(1,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.fabricarUnPaquete(mapa,"A",[2,"reloj","normal"]);
    sistema.fabricarUnPaquete(mapa,"A",[3,"reloj","normal"]);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    expect(mapa.destinos[0].recibidos.length).toStrictEqual(3);
})


test("funcionamiento de sistema (mover de cola de salida a destino)",()=>{
    let sistema=new Sistema();
    let mapa=new Mapa();
    mapa.determinarLimites(2,4);
    mapa.definir();
    mapa.agregarCentroParaMapas("facturacion");
    mapa.agregarCentroParaMapas("calidad");
    mapa.agregarCentroParaMapas("distribucion");  
    sistema.fabricarUnPaquete(mapa,"A",[1,"reloj","muy rapido"]);
    sistema.fabricarUnPaquete(mapa,"B",[1,"reloj","normal"]);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    sistema.incrementarTiempo(mapa);
    console.log(mapa.destinos)
    expect(mapa.destinos[0].length).toStrictEqual(1);
})

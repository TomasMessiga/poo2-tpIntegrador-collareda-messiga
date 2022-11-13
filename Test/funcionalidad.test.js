const Sistema=require('../Prototipos/Sistema.js');
const Mapa=require('../Prototipos/Mapa.js');
const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 
const Paquete = require('../Prototipos/Paquete.js');


test("incrementar una unidad de tiempo",()=>{
    let sistema=new Sistema();
    sistema.incrementarTiempo();
    expect(sistema.getTiempo()).toBe(1);
})
test("mover 1 pasos pauqete en mapa",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete(1,1,1,1);
    mapaAuxiliar.generar(local,destino);
    
    sistema.mover(mapaAuxiliar,paquete)
   
    expect(mapaAuxiliar.mapa).toStrictEqual([["cola de salida de locas",[paquete]],["Facturación",[]],["Calidad",[]] , ["Distribución",[]]]);
})
test("mover 2 pasos pauqete en mapa",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete(1,1,1,1);
    mapaAuxiliar.generar(local,destino);
    
    sistema.mover(mapaAuxiliar,paquete)
      
   
    expect(sistema.mover(mapaAuxiliar,paquete)).toStrictEqual(mapaAuxiliar.mapa[1][1]);
    expect(mapaAuxiliar.mapa[0][1]).toStrictEqual([]);
})
test("mover 3 pasos pauqete en mapa",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete(1,1,1,1);
    mapaAuxiliar.generar(local,destino);
    
    sistema.mover(mapaAuxiliar,paquete)
    sistema.mover(mapaAuxiliar,paquete)
    
 
    expect(sistema.mover(mapaAuxiliar,paquete)).toStrictEqual(mapaAuxiliar.mapa[2][1]);
})
test("mover 1 pasos  en mapa bidi",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let local1=new Local('b')
    let destino2=new Destino(1)
    let paquete1=new Paquete(1,1,1,1);
    let paquete2=new Paquete(1,1,1,2);
    mapaAuxiliar.generar(local,destino);
    mapaAuxiliar.generar(local1,destino2);    
    sistema.mover(mapaAuxiliar,paquete1)
    sistema.mover(mapaAuxiliar,paquete2)
    expect(sistema.mover(mapaAuxiliar,paquete2)).toStrictEqual(mapaAuxiliar.mapa[1][2])
})


test("fabricar paquetes para la cola de salida del local",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('A');
    let destino=new Destino(1);
    mapaAuxiliar.generar(local,destino);
    mapaAuxiliar.producirPaquete("A",[1,1,1,1]);
    expect(mapaAuxiliar.mapa).toStrictEqual(new Paquete(1,1,1,1));
})
























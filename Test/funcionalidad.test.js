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
    expect(sistema.getTiempo()).toBe(1);
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
    sistema.mover(mapaAuxiliar,paquete)
    expect(sistema.getTiempo()).toBe(2);
    expect(mapaAuxiliar.mapa).toStrictEqual([["cola de salida de locas",[]],["Facturación",[paquete]],["Calidad",[]] , ["Distribución",[]]]);
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
    sistema.mover(mapaAuxiliar,paquete)
    expect(mapaAuxiliar.mapa).toStrictEqual([["cola de salida de locas",[]],["Facturación",[]],["Calidad",[paquete]] , ["Distribución",[]]]);
})
test("mover 4 pasos pauqete en map",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete(1,1,1,1);
    mapaAuxiliar.generar(local,destino);    
    sistema.mover(mapaAuxiliar,paquete)
    sistema.mover(mapaAuxiliar,paquete)
    sistema.mover(mapaAuxiliar,paquete)
    sistema.mover(mapaAuxiliar,paquete)
    expect(mapaAuxiliar.mapa).toStrictEqual([["cola de salida de locas",[]],["Facturación",[]],["Calidad",[]] , ["Distribución",[paquete]]]);
})

test("LLego a destino",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete(1,1,1,1);
    mapaAuxiliar.generar(local,destino);    
    sistema.mover(mapaAuxiliar,paquete)
    sistema.mover(mapaAuxiliar,paquete)
    sistema.mover(mapaAuxiliar,paquete)
    sistema.mover(mapaAuxiliar,paquete)
    
    expect(sistema.mover(mapaAuxiliar,paquete)).toStrictEqual("llego a destino:"+destino.nombre);
 


})

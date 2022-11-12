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
    sistema.mover(mapaAuxiliar,paquete)
    expect(mapaAuxiliar.mapa).toStrictEqual([["cola de salida de locas",[]],["Facturación",[paquete]],["Calidad",[]] , ["Distribución",[]]]);
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
test(" no puedo mover facturacion",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete(1,1,1,1);
    let paquete2=new Paquete(1,1,1,2);
    let paquete3=new Paquete(1,1,1,3);
    let paquete4=new Paquete(1,1,1,4);
    mapaAuxiliar.generar(local,destino);
    mapaAuxiliar.mapa[1][1].push(paquete2)
    mapaAuxiliar.mapa[1][1].push(paquete3)
    mapaAuxiliar.mapa[1][1].push(paquete4)    
    sistema.mover(mapaAuxiliar,paquete)
    expect(sistema.mover(mapaAuxiliar,paquete)).toStrictEqual([["cola de salida de locas",[paquete]],["Facturación",[paquet2,paquete3,paquete4]],["Calidad",[]] , ["Distribución",[]]]);
})
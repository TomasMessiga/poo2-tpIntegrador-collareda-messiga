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
    expect(mapaAuxiliar.mapa).toStrictEqual([["cola de salida de local","Facturación","Calidad","Distibucion"],[[paquete],[],[],[]]]);
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
    expect(mapaAuxiliar.mapa).toStrictEqual([["cola de salida de local","Facturación","Calidad","Distibucion"],[[],[paquete],[],[]]]);
})

test("mover 2 pasos pauqete en mapa",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete(1,1,1,1);
    let paquete2=new Paquete(2,2,2,2);
    mapaAuxiliar.generar(local,destino);
    sistema.mover(mapaAuxiliar,paquete)
    sistema.mover(mapaAuxiliar,paquete)
    sistema.mover(mapaAuxiliar,paquete)
    expect(mapaAuxiliar.mapa).toStrictEqual([["cola de salida de local","Facturación","Calidad","Distibucion"],[[],[],[paquete],[]]]);
})

test("mover 2 pasos pauqete en mapa",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete (1,1,1,1)
    mapaAuxiliar.generar(local,destino);
    sistema.Corrertiempo(mapaAuxiliar,local,[1,1,1,1])
    expect(mapaAuxiliar.mapa).toStrictEqual([["cola de salida de local","Facturación","Calidad","Distibucion"],[[paquete],[],[],[]]]);
})

test("fabricar paquetes para un mapa",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(1)
    let paquete=new Paquete(1,1,1,1);
    mapaAuxiliar.generar(local,destino);
    sistema.especificarFabricacion('a',mapaAuxiliar,[1,1,1,1]);
    expect(mapaAuxiliar.mapa).toStrictEqual([["cola de salida de local","Facturación","Calidad","Distibucion"],[[paquete],[],[],[]]]);
})





























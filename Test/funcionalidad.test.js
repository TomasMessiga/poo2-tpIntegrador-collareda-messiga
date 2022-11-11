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
test("insertar pauqete en mapa",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete(1,1,1,1);
    mapaAuxiliar.generar(local,destino);
    sistema.mover(mapaAuxiliar,paquete)
    expect(mapaAuxiliar.mapa[0][1]).toStrictEqual(paquete)
})

test("mover paquete en 2 pos",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    let paquete=new Paquete(1,1,1,1);
    mapaAuxiliar.generar(local,destino);
    sistema.mover(mapaAuxiliar,paquete)
    sistema.mover(mapaAuxiliar,paquete)
    
    expect(mapaAuxiliar.mapa).toStrictEqual([["cola de salida de locas",0],["Facturación",paquete],["Calidad",0] , ["Distribución",0]])
    
})


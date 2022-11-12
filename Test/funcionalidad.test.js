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
    mapaAuxiliar.mapa[3][1].push(paquete)
    
    expect(sistema.mover(mapaAuxiliar,paquete)).toBe(1);
})





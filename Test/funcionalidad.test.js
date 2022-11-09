const Sistema=require('../Prototipos/Sistema.js');
const Mapa=require('../Prototipos/Mapa.js');

test("incrementar una unidad de tiempo",()=>{
    let sistema=new Sistema();
    sistema.incrementarTiempo();
    expect(sistema.getTiempo()).toBe(1);
})

test("insertar un mapa en el sistema",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    expect(sistema.mapa).toBe(mapaAuxiliar);
})
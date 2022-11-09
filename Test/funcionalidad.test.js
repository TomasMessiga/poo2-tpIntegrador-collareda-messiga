const Sistema=require('../Prototipos/Sistema.js');
const Mapa=require('../Prototipos/Mapa.js');

test("incrementar una unidad de tiempo",()=>{
    let sistema=new Sistema();
    sistema.incrementarTiempo();
    expect(sistema.getTiempo()).toBe(1);
})
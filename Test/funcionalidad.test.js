const Sistema=require('../Prototipos/Sistema.js');
const Mapa=require('../Prototipos/Mapa.js');
const Local=require('../Prototipos/Local.js');
const Destino=require('../Prototipos/Destino.js'); 

test("incrementar una unidad de tiempo",()=>{
    let sistema=new Sistema();
    sistema.incrementarTiempo();
    expect(sistema.getTiempo()).toBe(1);
})

test("insertar un mapa en el sistema",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    sistema.mapa=mapaAuxiliar.generar();
    expect(sistema.mapa).toStrictEqual(mapaAuxiliar.generar());
})
test("mover paquete",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();

    sistema.mapa=mapaAuxiliar.generar(Local,Destino)
    expect().toStrictEqual(mapaAuxiliar.generar());
})
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

test("insertar un mapa en el sistema",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let local=new Local('a')
    let destino=new Destino(0)
    sistema.mapa=mapaAuxiliar.generar(local,destino);
    expect(sistema.mapa).toStrictEqual([["cola de salida de locas",0],["Facturación",0],["Calidad",0] , ["Distribución",0]]);
})

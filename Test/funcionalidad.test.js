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
    sistema.mapa=mapaAuxiliar.generar();
    expect(sistema.mapa).toStrictEqual(mapaAuxiliar.generar());
})
test("mover paquete",()=>{
    let sistema=new Sistema();
    let mapaAuxiliar=new Mapa();
    let destino=new Destino();
    let local= new Local();
    let paquete= new Paquete();
    sistema.mapa=mapaAuxiliar.generar(Local,Destino)

    expect(sistema.mover(paquete)).toStrictEqual([["cola de salida de locas",paquete,["Facturación",0],["Calidad",0] , ["Distribución",0]]);
})
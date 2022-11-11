const ColaDeSalida=require("../Prototipos/Coladesalida")
const Local=require('../Prototipos/Local.js');
test("generar colade2salida",()=>{
    let nombre=0
    let local=new Local(nombre);
    let colasalida=new ColaDeSalida();
    expect(colasalida.generar(local)).toBe("cola de salida de"+local.nombre)
})

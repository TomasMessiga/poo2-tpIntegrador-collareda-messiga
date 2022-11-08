const ColaDeSalida=require("../Prototipos/Coladesalida")
const Local=require('../Prototipos/Local.js');
test("generar coladesalida",()=>{
    let local=new Local(nombre);
    let colasalida=new ColaDeSalida();
    expect(colasalida.generar(local)).toBe("cola de salida de"+local.nombre)
})

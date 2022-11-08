const ColaDeSalida=require("../Prototipos/Coladesalida")

test("generar coladesalida",()=>{
    let colasalida=new ColaDeSalida();
    expect(colasalida.generar("local")).toBe("cola de salida de local")
})

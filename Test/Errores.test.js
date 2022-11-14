const Validacion=require('../Prototipos/Validacion.js');

test('Recibir un error 1',()=>{
    let causa=new Validacion();
    let mensaje="Cero no es igual que uno";
    expect(() => {
        (causa.verificarCumplimiento(0!=1,mensaje))
      }).toThrow(new Error(mensaje));
})

test('Recibir un error 2',()=>{
    let causa=new Validacion();
    let mensaje="Cero no es igual que uno";
    expect(() => {
        (causa.verificarIncumplimiento(0==1,mensaje))
      }).toThrow(new Error(mensaje));
})
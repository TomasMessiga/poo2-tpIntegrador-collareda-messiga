const Validacion=require('../Prototipos/Validacion.js');

test('Recibir un error',()=>{
    let causa=new Validacion();
    let mensaje="Cero no es igual que uno";
    expect(() => {
        (causa.verificarCumplimiento(0!=1,mensaje))
      }).toThrow(new Error(mensaje));
})
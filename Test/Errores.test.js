const Error=require('../Prototipos/Error.js');

test('Recibir un error',()=>{
    let causa=Error();
    let mensaje="Cero no es igual que uno";
    expect(causa.validar(0==1,mensaje)).toThrow(mensaje);
})
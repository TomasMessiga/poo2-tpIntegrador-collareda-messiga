const Error=require('../Prototipos/Error.js');

test('Recibir un error',()=>{
    let causa=new Error();
    let mensaje="Cero no es igual que uno";
    expect(causa.verificar(0==1,mensaje)).toThrow(mensaje);
})
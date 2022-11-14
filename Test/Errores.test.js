const Validacion=require('../Prototipos/Validacion.js');

test('Recibir un error por cumplir una condicion',()=>{
    let causa=new Validacion();
    let mensaje="Cero no es igual que uno";
    expect(() => {
        (causa.verificarCumplimiento(0!=1,mensaje))
      }).toThrow(mensaje);
})

test('Recibir un error por incumplir una condicion',()=>{
    let causa=new Validacion();
    let mensaje="Cero no es igual que uno";
    expect(() => {
        (causa.verificarIncumplimiento(0==1,mensaje))
      }).toThrow(mensaje);
})
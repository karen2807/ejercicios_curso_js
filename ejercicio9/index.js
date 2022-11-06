
const funcion = val =>{
    if (typeof val === 'number') {
        return val 
    }
    throw new Error('Error, el valor deber ser numero')
}

const num = 'd';

try {
    const doble = funcion(num)
    console.info('El valor es ',doble)
} catch (e) {
    console.error('Error, verifique que el valor sea un numero!!');
}
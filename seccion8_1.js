function mifuncion() {
    return true;
}

console.log(mifuncion());

function hola() {
    const miPromesa = new Promise((resolve, reject) => {
        if (true) {
            resolve();
        } else {
            reject();
        }
        });
        
        miPromesa
                .then(()=>console.log('Hola soy una promesa '))
                .catch(()=>console.log('ERROR '))
                .finally(()=>console.log(''))
    
    
}
setTimeout(hola,5000)

function* generadorId(){
    yield indic(1)
    yield indic(2)      
}

const gen = generadorId();
for(let y of gen){
    console.log(y)
}


function indic(valor) {
    setTimeout(()=>{
        console.log({valor, resultado: valor*2})
    },Math.random()* 1000);
    return {
        valor, 
        resultado: valor*2};
}
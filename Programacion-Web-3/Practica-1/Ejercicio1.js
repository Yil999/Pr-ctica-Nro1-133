// 1. Crear una función que cuente cuantas veces aparece
//    cada vocal en un texto y devuelva el resultado en 
//    un objeto.

function miFuncion(texto) {
    
    const textoMinusculas = texto.toLowerCase();
    
    const miFuncion = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };

    for (let i = 0; i < textoMinusculas.length; i++) {
        const caracter = textoMinusculas[i];
        
        if (miFuncion.hasOwnProperty(caracter)) {
            miFuncion[caracter]++;
        }
    }
    
    return miFuncion;
}

let obj = miFuncion("euforia");
console.log(obj); // {a: 1, e: 1, i: 1, o: 1, u: 1}

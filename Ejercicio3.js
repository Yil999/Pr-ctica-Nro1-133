// 3. Crear una función que reciba un arreglo de números y
//    devuelva en un objeto a los pares e impares:
function miFuncion(numeros) {
    let pares = [];
    let impares = [];
    
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }
    
    return {
        pares: pares,
        impares: impares
    };
}

let obj = miFuncion([1,2,3,4,5]);
console.log(obj); // { pares: [2,4], impares: [1,3,5] }
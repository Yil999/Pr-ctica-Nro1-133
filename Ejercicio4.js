// 4. Crear una función que reciba un arreglo de números y
//    devuelva el numero mayor y el menor, en un objeto.
function miFuncion(numeros) {
    let mayor = numeros[0];
    let menor = numeros[0];
    
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    
    return { mayor, menor };
}

let obj = miFuncion([3,1,5,4,2]);
console.log(obj); // { mayor: 5, menor: 1 }
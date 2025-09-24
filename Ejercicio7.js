// 7. Almacenar el resto de los elementos de un arreglo sin tomar
//    en cuenta los dos primeros elementos de un arreglo, mediante
//    desestructuración.

const arreglo = [10, 20, 30, 40, 50, 60];

const [primero, segundo, ...resto] = arreglo;

console.log(primero); // 10
console.log(segundo); // 20
console.log(resto);   // [30, 40, 50, 60]
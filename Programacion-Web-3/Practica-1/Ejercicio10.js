// 10. ¿Cuando es conveniente utilizar un callback, y cuando es 
//      necesario utilizar una promesa?

// Callback lo usaría cuando necesito algo sencillo, por ejemplo, 
// que se ejecute una función después de que termine otra. Es como
// decir: "hacé esto y cuando acabes, avisame con esta otra función". 
// Pero si tengo muchas cosas encadenadas, se vuelve un desorden y 
// difícil de leer.

// Promesa la usaría cuando quiero manejar procesos más largos o varias
// tareas que dependen una de otra. Es más ordenado porque puedo usar 
// .then() y .catch() o incluso async/await para que el código parezca 
// más limpio. Además, es más fácil manejar errores ahí.

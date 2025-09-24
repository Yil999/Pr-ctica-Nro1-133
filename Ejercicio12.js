// 12. Proporcione  un ejemplo concreto de encadenamiento de callback se puede
//     reescribir mejor con async/await haciendo el código limpio y mantenible.
/*
function prepararCafe(callback) {
  setTimeout(() => {
    console.log("Café listo");
    callback();
  }, 1000);
}

function tostarPan(callback) {
  setTimeout(() => {
    console.log("Pan tostado");
    callback();
  }, 1000);
}

function servirJugo(callback) {
  setTimeout(() => {
    console.log("Jugo servido");
    callback();
  }, 1000);
}

prepararCafe(() => {
  tostarPan(() => {
    servirJugo(() => {
      console.log("Desayuno completo");
    });
  });
});
*/

function prepararCafe() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(" Café listo");
      resolve();
    }, 1000);
  });
}

function tostarPan() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(" Pan tostado");
      resolve();
    }, 1000);
  });
}

function servirJugo() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(" Jugo servido");
      resolve();
    }, 1000);
  });
}

async function desayuno() {
  await prepararCafe();
  await tostarPan();
  await servirJugo();
  console.log(" Desayuno completo");
}

desayuno();

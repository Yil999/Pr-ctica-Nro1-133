// 11. Proporcione un ejemplo concreto de encadenamiento de promesas.
function hervirAgua() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(" El agua ya está hirviendo.");
      resolve("agua caliente");
    }, 2000);
  });
}

function prepararCafe(agua) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(" Se preparó el café con el " + agua + ".");
      resolve("café listo");
    }, 2000);
  });
}

function servirCafe(cafe) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("El " + cafe + " ya está servido.");
      resolve("¡Disfruta tu café!");
    }, 2000);
  });
}

async function hacerCafe() {
  try {
    const agua = await hervirAgua();      // espera a que hierva el agua
    const cafe = await prepararCafe(agua); // espera a que se prepare el café
    const servido = await servirCafe(cafe); // espera a que se sirva
    console.log(" Proceso completado:", servido);
  } catch (error) {
    console.error(" Ocurrió un error:", error);
  }
}

hacerCafe();

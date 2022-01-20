function generadorPalos() {
  let palos = ["♦", "♥", "♠", "♣"];
  let palosAleatorio = Math.floor(Math.random() * palos.length);
  return palos[palosAleatorio];
}
console.log(generadorPalos());

function generadorNumeros() {
  let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let numerosAleatorio = Math.floor(Math.random() * numeros.length);
  return numeros[numerosAleatorio];
}
console.log(generadorNumeros());

function inyectaNumero() {
  document.getElementById("numero").innerHTML = generadorNumeros();
}

function inyectaPalos() {
  let paloElegido = generadorPalos();
  document.getElementById("paloArriba").innerHTML = paloElegido;
  document.getElementById("paloAbajo").innerHTML = paloElegido;

  let paloArriba = document.getElementById("paloArriba");
  let paloAbajo = document.getElementById("paloAbajo");
  let numero = document.getElementById("numero");
  let colornumero = Math.floor(Math.random() * 13);
  let colores = Math.floor(Math.random() * 2);
  if (
    paloElegido === "♦" ||
    paloElegido === "♥" ||
    numero === "♦" ||
    numero === "♥"
  ) {
    paloArriba.style.color = "red";
    paloAbajo.style.color = "red";
    numero.style.color = "red";
  }
}

window.onload = function() {
  generadorPalos();
  generadorNumeros();
  inyectaNumero();
  inyectaPalos();
};

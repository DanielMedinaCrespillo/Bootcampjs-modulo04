import "./style.css";
const turnoActual = document.getElementById("turno");
const turnoSiguiente = document.getElementById("siguiente");
const turnoAnterior = document.getElementById("anterior");
const turnoReset = document.getElementById("resetear");
const inputManual = document.getElementById("manualturno");
const btnManual = document.getElementById("botonmanual");

let turno = 0;

// Boton Siguiente
if (
  turnoSiguiente !== null &&
  turnoSiguiente !== undefined &&
  turnoSiguiente instanceof HTMLButtonElement
) {
  turnoSiguiente.addEventListener("click", siguiente);
}

function siguiente(): void {
  if (
    turnoActual !== null &&
    turnoActual !== undefined &&
    turnoActual instanceof HTMLHeadingElement
  ) {
    turno = turno + 1;
    turnoActual.textContent = `${turno}`.padStart(2, "0");
  }
}

//Boton Anterior
if (
  turnoAnterior !== null &&
  turnoAnterior !== undefined &&
  turnoAnterior instanceof HTMLButtonElement
) {
  turnoAnterior.addEventListener("click", anterior);
}

function anterior(): void {
  if (
    turnoActual !== null &&
    turnoActual !== undefined &&
    turnoActual instanceof HTMLHeadingElement
  ) {
    turno = turno - 1;
    turnoActual.textContent = `${turno}`.padStart(2, "0");
  }
}

//Boton Resetear
if (
  turnoReset !== null &&
  turnoReset !== undefined &&
  turnoReset instanceof HTMLButtonElement
) {
  turnoReset.addEventListener("click", reset);
}

function reset(): void {
  if (
    turnoActual !== null &&
    turnoActual !== undefined &&
    turnoActual instanceof HTMLHeadingElement
  ) {
    turno = 0;
    turnoActual.textContent = `${turno}`.padStart(2, "0");
  }
}

//Ingresar turno manualmente
if (btnManual !== null && btnManual instanceof HTMLButtonElement) {
  btnManual.addEventListener("click", manual);
}

function manual(): void {
  if (
    inputManual !== null &&
    inputManual !== undefined &&
    inputManual instanceof HTMLInputElement &&
    turnoActual !== null &&
    turnoActual !== undefined
  ) {
    turno = parseInt(inputManual.value);
    turnoActual.textContent = `${turno}`.padStart(2, "0");
  }
}

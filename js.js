const etiquetaDias = document.querySelector(".dias");
const fechaActual = document.querySelector(".dia-actual");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

// obtener la fecha actual con mes y año

let fecha = new Date();
let añoActual = fecha.getFullYear();
let mesActual = fecha.getMonth();

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const renderizarCalendario = () => {
    let primerDiaMes = new Date(añoActual, mesActual, 1).getDay();
    let ultimaFechaMes = new Date(añoActual, mesActual + 1, 0).getDate();
    let ultimoDiaMes = new Date(añoActual, mesActual, ultimaFechaMes).getDay();
    let ultimaFechaUltimoMes = new Date(añoActual, mesActual, 0).getDate();
    let etiquetaLi = "";

    for (let i = primerDiaMes; i > 0; i--) {
        etiquetaLi += `<li class="inactivo">${ultimaFechaUltimoMes - i + 1}</li>`;
        console.log(etiquetaLi)
    }

    for (let i = 1; i <= ultimaFechaMes; i++) {
        if (i === fecha.getDate() && mesActual === new Date().getMonth() && añoActual === new Date().getFullYear()) {
            etiquetaLi += `<li class="activo">${i}</li>`
        }
        else {
            etiquetaLi += `<li class="">${i}</li>`
        }
    }

    for (let i = ultimoDiaMes; i < 6; i++) {
        etiquetaLi += `<li class="inactivo">${i - ultimoDiaMes + 1}</li>`
    }
    fechaActual.innerText = `${meses[mesActual]} ${añoActual}`;
    etiquetaDias.innerHTML = etiquetaLi;
}

renderizarCalendario();

prevButton.addEventListener("click", () => {
    mesActual = mesActual - 1;
    if (mesActual < 0) {
        mesActual = 11;
        añoActual = añoActual - 1;
    }
    fecha = new Date(añoActual, mesActual, 1);
    renderizarCalendario();
});

nextButton.addEventListener("click", () => {
    mesActual = mesActual + 1;
    if (mesActual > 11) {
        mesActual = 0;
        añoActual = añoActual + 1;
    }
    fecha = new Date(añoActual, mesActual, 1);
    renderizarCalendario();
})
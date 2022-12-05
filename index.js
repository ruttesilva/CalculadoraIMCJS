let campoAltura = null;
let campoMassa = null;
let botaoQueCalcula = null;
let paragrafoExibeIMC = null;
let paragrafoExibeDiagnostico = null;
let divExibeDiagnostico = null;

let dadosUsuario = {
    altura: null,
    massa: null
}

document.addEventListener("DOMContentLoaded", setup);

function setup() {

    campoAltura = document.getElementById("alturaUsuario");
    campoMassa = document.getElementById("massaUsuario");
    botaoQueCalcula = document.getElementById("botaoCalcular");
    paragrafoExibeIMC = document.getElementById("exibeIMC");
    paragrafoExibeDiagnostico = document.getElementById("exibeDiagnostico");
    divExibeResultado = document.getElementById("exibeCalculos");

    campoAltura.addEventListener("change", () => dadosUsuario.altura = Number(campoAltura.value));

    campoMassa.addEventListener("change", () => dadosUsuario.massa = Number(campoMassa.value));

    botaoQueCalcula.addEventListener("click", () => {
        if (dadosUsuario.altura != 0 && dadosUsuario.massa != 0) {
        const valorIMC = (dadosUsuario.massa / (dadosUsuario.altura ** 2)).toFixed(2);
        const diagnosticoUsuario = testaDiagnostico(valorIMC);

        paragrafoExibeIMC.innerText = `${valorIMC} kg/m².`;
        paragrafoExibeDiagnostico.innerText = `${diagnosticoUsuario}`;
        divExibeResultado.hidden = 0;
        }
    });
}

function testaDiagnostico(valorIMC) {
    let IMC = Number(valorIMC)

    switch (true) {
        case (IMC < 17):
            return "Muito abaixo do peso.";

        case (IMC < 18.5):
            return "Abaixo do peso."
        
        case (IMC < 25):
            return "Peso normal.";

        case (IMC < 30):
            return "Acima do peso.";

        case (IMC < 35):
            return "Obesidade.";

        case (IMC < 40):
            return "Obesidade severa.";

        case (IMC >= 40):
            return "Obesidade mórbida.";

        default:
            return "Um erro ocorreu.";
    }
}
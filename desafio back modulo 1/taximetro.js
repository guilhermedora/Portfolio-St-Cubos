const min = 25;
const km = 11.5;

let distanciaBase = km * 70;
let tempoBase = min * 50;

let distanciaExcedida, tempoExcedido, valorDistancia, valorTempo = 0;

if (km <= 10) {
    valorDistancia = distanciaBase;
}

if (min <= 20) {
    valorTempo = tempoBase;
}

if (km > 10) {
    distanciaExcedida = (km - 10) * 50;
    valorDistancia = (10 * 70) + distanciaExcedida;
}

if (min > 20) {
    tempoExcedido = (min - 20) * 30;
    valorTempo = (20 * 50) + tempoExcedido;
}

let valorFinal = valorTempo + valorDistancia;

console.log(valorFinal);
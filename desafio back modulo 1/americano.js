const jogadores = [1, 1, 1];
let soma = 0;
let posicao = 0;

for (let i = 0; i < jogadores.length; i++) {
    soma += jogadores[i];
}
if (soma <= jogadores.length) {
    posicao = soma;
} else {
    for (let i = 0; i < soma; i++) {
        if (posicao <= jogadores.length) {
            posicao++
        } if (posicao > jogadores.length) {
            posicao = 1;
        }
    }
}
console.log(posicao);
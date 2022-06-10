const jogadores = [
    {
        nome: "Herman",
        jogada: 0
    },
    {
        nome: "Rhodes",
        jogada: 0
    },
    {
        nome: "Beach",
        jogada: 0
    }
]

const quemJogouUm = [];
const quemJogouZero = [];

for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i].jogada === 1) {
        quemJogouUm.push(jogadores[i].nome);
    } else if (jogadores[i].jogada === 0) {
        quemJogouZero.push(jogadores[i].nome);
    }
}

if (quemJogouUm.length === 1) {
    console.log(quemJogouUm[0]);
} else if (quemJogouZero.length === 1) {
    console.log(quemJogouZero[0]);
} else {
    console.log("NINGUEM");
}


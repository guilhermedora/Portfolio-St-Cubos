const senhaCorreta = "cuuubos";
const senhaErrada = "ucuguogubyos";
let senhaErradaFiltrada = "";
let comparar = "";

// while (input !== input.replace("\n", " ")) {
//     input = input.replace("\n", " ");
//     }
//     let novoInput = input.split(" ");
//     novoInput.pop()

for (const scan of senhaErrada) {
    if (senhaCorreta.includes(scan)) {
        senhaErradaFiltrada += scan;
    }
}

for (let i = 0; i < senhaCorreta.length; i++) {
    if (senhaErradaFiltrada.includes(senhaCorreta[i], i)) {
        comparar += senhaCorreta[i];
    }
}

if (comparar.includes(senhaCorreta)) {
    console.log("SIM");
} else {
    console.log("NAO");
}











// console.log(ordemSE);
// for (let i = 0; i < ordemSE.length - 1; i++) {
//     if (ordemSE[i + 1] >= ordemSE[i]) {
//         sim = true;
//     } else {
//         sim = false;
//         break;
//     }
// }

// if (sim) {
//     console.log("SIM");
// } else {
//     console.log("NAO");
// }







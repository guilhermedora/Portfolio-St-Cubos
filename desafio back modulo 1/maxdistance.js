const input = [0];
let valores = [];
// while (input !== input.replace("\n", " ")) {
//     input = input.replace("\n", " ").trim();
// }
// let novoInput = input.split(" ");

if (novoInput[0] >= 2) {
    for (let i = 0; i < novoInput.length; i += 2) {
        for (let c = 3; c < novoInput.length; c += 2) {
            valores.push(Math.sqrt(((novoInput[c] - novoInput[i + 1]) ** 2) + ((novoInput[c + 1] - novoInput[i + 2]) ** 2)));
        }
    }
    const valoresValidos = valores.filter(function (valor) {
        return !Number.isNaN(valor);
    });
    console.log(Math.max(...valoresValidos));
} else if (novoInput[0] == 0 || novoInput[0] === '') {
    valores.push(0);
    console.log(valores[0].toFixed(1));
}

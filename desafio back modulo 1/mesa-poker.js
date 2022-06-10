const valoresValidos = [];
const valores = [0, 5, 6, 10, 11];
const min = 2;
const max = 10;
for (const scan of valores) {
    if (scan >= min && scan <= max) {
        valoresValidos.push(scan);
    }
}
console.log(valoresValidos)
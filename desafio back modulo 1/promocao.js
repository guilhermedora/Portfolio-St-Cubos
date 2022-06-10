const precos = [100, 100, 100];
const menorPreco = Math.min(...precos);
let somaPrecos = 0;

for (let i = 0; i < precos.length; i++) {
    somaPrecos += precos[i];
}

if (precos.length >= 3) {
    somaPrecos = somaPrecos - (menorPreco * 0.5);
}

console.log(somaPrecos);
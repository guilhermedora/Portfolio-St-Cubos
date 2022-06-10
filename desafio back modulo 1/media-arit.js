const lista = [2, 3, 4];
let valorAcumulado = 0;
let mediaArit = 0;
for (let i = 0; i < lista.length; i++) {
    valorAcumulado += lista[i];
    mediaArit = valorAcumulado / lista.length;
}
console.log(mediaArit);
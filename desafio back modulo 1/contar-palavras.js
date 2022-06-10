let texto = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ";

const arrayTxt = texto.split(" ");

let count = 0;

for (let i = 0; i < arrayTxt.length; i++) {
    if (arrayTxt[i] != "") {
        count++;
    }
}

console.log(count);


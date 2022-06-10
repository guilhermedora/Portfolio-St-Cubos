const lista = [1, 18, 24];
let max = Math.max(...lista);
let adultoMaisJovem = max;
let soPirralhos = true;

for (const scan of lista) {
    if (scan >= 18 && scan <= adultoMaisJovem) {
        adultoMaisJovem = scan;
        soPirralhos = false;
    }
}
if (soPirralhos) {
    console.log("CRESCA E APARECA");
} else {
    console.log(adultoMaisJovem);
}
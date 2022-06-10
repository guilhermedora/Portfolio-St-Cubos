const input = "esta";
let novaPalavra = "";

if (input.slice(0, 1) === input.slice(0, 1).toLowerCase() && input.slice(1, input.length) === input.slice(1, input.length).toUpperCase()) {
    novaPalavra += input.slice(0, 1).toUpperCase() + input.slice(1, input.length).toLowerCase() + " ";
} else if (input === input.toUpperCase()) {
    novaPalavra = input.toLowerCase();
} else {
    novaPalavra += input + " ";
}

console.log(novaPalavra.trim());
function verificarFuncao(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        console.log("PERTENCE");
    } else {
        console.log("NAO PERTENCE");
    }
}
verificarFuncao(10, 5, 20);
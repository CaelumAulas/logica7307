function pegaNumero(texto) {
    return parseFloat(prompt(texto).replace("O", 0).replace(",", "."))
}

function pegaInteiro(texto) {
    return parseInt(prompt(texto).replace("O", 0).replace(",", "."))
}

function formataMoeda() {
return "R$ " + numero.toFixed(2).replace(".", ",")
}
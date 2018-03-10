var anoAtual = new Date().getFullYear()
var mesAtual = new Date().getMonth() + 1
var diaAtual = new Date().getDate()

var dataAniversario = prompt("Digite seu aniversário").split("/")

var diaAniversario = parseInt(dataAniversario[0])
var mesAniversario = parseInt(dataAniversario[1])
var anoAniversario = parseInt(dataAniversario[2])

var jaFezAniversario = mesAtual > mesAniversario 
                       || (mesAtual == mesAniversario && diaAtual > diaAniversario)

// já completei aniversário
if(jaFezAniversario){
    document.write(anoAtual - anoAniversario)
}
if(!jaFezAniversario){
    document.write(anoAtual - anoAniversario - 1)
}
const div = document.querySelector("div")

var entradav = prompt("Digite o valor de compra: ")
var saidap = prompt("Valor de pagamento: ")

if (entradav == saidap){
 
    alert("Não será necessário troco")
}

else if (entradav > saidap){
    alert("O valor informado é menor que o valor de compra")
}

else {
    nota100 = Math.floor((saidap - entradav)/ 100)
    resto100 = (saidap - entradav) %100
    nota10 = Math.floor(resto100 / 10)
    resto10 = resto100 % 10
    nota1 = Math.floor(resto10 / 1 )
    document.write("Você deve passar " + nota100 + "notas de 100, " + nota10 + "notas de 10 e" + " nota 1 ")

}
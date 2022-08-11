const div = document.querySelector("div")
var carro = (prompt("Digite o tipo de carro utilizado: (A, B, ou C) "))
var percurso = Number(prompt("Digite a distância em km da viagem: "))


     
if (carro == "A" || carro == "a" ) {

    consumo = percurso/8

}
else if ( carro == "B" || carro == "b"){

    consumo = percurso/9

}
else if (carro == "C" || carro == "c"){
   consumo = percurso/12

}
else{
    alert("Não possuí esse tipo de veiculo")
}

alert("O seu consumo de gasolina será em litro é:  " + consumo ) 
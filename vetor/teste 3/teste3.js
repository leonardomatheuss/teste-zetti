const div = document.querySelector("div")

var salarioB = Number(prompt('Digite o seu salário: '))
        

if(salarioB < 2000){
 var x10 = salarioB - (salarioB *0.1) 
 document.write(`O seu salário liquido é ${x10}`)
}
else {
var x20=  salarioB - (salarioB *0.2) 
document.write(`O seu salário Liquido é ${x20}`)
}
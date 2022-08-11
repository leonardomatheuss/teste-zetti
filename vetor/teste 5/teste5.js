
const div = document.querySelector("div")


var triangulo = Number(prompt("Digite um valor do lado do triangulo: "))
var triangulo2 = Number(prompt("Digite um valor do lado do triangulo: "))
var triangulo3= Number((prompt("Digite um valor do lado do triangulo: ")))

if(( triangulo == triangulo2) && (triangulo2 == triangulo3)){
   document.write("O Triangulo é equilátero !");
}
 else if 
   ( (triangulo != triangulo2) && (triangulo2 != triangulo3)) {
  
    document.write("O triangulo é escaleno !")
   }
   

   else {
   
    document.write("O triangulo é isóceles  !")
   }

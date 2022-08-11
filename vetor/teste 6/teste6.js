
const div = document.querySelector("div")


var num1 = Number(prompt("Digite um número: "));
     var num2 = Number(prompt("Digite outro número: "));
     var num3= Number(prompt("Digite o ultimo número: "));

     var aux = num1;

     if(num2 < num1){
      aux=num2;
      num2=num1;
      num1=aux;
     }

     if(num3 < num1){
      aux=num3;
      num3=num1;
      num1=aux;
     }

     if(num3 < num2){
      aux=num3;
      num3=num2;
      num2=aux;
     }
     alert(num1+"-"+num2+"-"+num3);
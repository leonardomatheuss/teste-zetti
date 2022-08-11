const div = document.querySelector("div")


var Phprodutos = []
var cadastro
var total = 0

while (cadastro != "n" && cadastro !="N") {
    addProduto()
    cadastro = prompt("Desejar algo mais? Digite N, caso não queira. ")
    
}

if(cadastro == 'n' || cadastro == 'N'){
    var desconto = prompt("Qual vai ser o valor total do desconto?");
}



function addProduto(){

    Phprodutos.push({
      codigo1: prompt("Código do produto: "),
      qtde1: prompt("Quantidade: "),
      valorunit: prompt("Valor unitario: "),
      valorbruto: "",
      valordescont: "",
      valorliquido:"",

    });
    
    for (i=0; i < Phprodutos.length; i++) {
        
        Phprodutos[i].valorbruto = Phprodutos[i].valorunit * Phprodutos[i].qtdetota + Phprodutos[i].valorbruto
    }
    for(i=0; i < Phprodutos.length; i++) {
        Phprodutos[i].valordescont = (((desconto * Phprodutos[i].valorbruto * 100) / 100) /100) .toFixed(2)

        Phprodutos[i].valorliquido = (Phprodutos[i].valorbruto - Phprodutos[i].valordescont).toFixed(2)

        document.writeln ("O produto do código " +Phprodutos[i].codigo + " deu entrada de " + Phprodutos[i].qtde1 +  " unidades, no valor unitário de R$ " + Phprodutos[i].valorunit + "dando o valor total de " + Phprodutos[i].valorbruto +  "mas foi adicionado um desconto de R$"  + Phprodutos[i].valordescont +  "assim o total final com os descontos será de R$ " + Phprodutos[i].valorliquido + "</br>" )

    }}
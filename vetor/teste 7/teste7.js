const div = document.querySelector("div")
var municipio = prompt('Digite seu Munícipio: ')
        var quantp = Number(prompt("Quantidade de pessoas da cidade: "))
        var votos = Number(prompt("Quantidade de votos do  canditado mais votado: "))

       

      if( quantp > 200.000 && ( votos < (quantp/2) )) {
            document.write("O municipio terá segundo turno")
        }
       else if (quantp > 200.000 && ( (votos > (quantp/2 )))) {
            document.write("O municipio não terá segundo turno!")}
       
       
       else  {
        document.write("O munícipio não terá segundo turno!")
       }
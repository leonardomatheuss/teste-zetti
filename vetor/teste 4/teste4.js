const div = document.querySelector("div")

var produtox = Number(prompt('Digite o valor do produto: '))

        if(produtox <200){
          var prod50 = produtox + (produtox * 0.5)
          document.write(`O produto vai custar: ${prod50}`)
        }
        else{
            var prod30 = produtox + (produtox * 0.3)
            document.write(`O produto vai custar ${prod30}`)
        }
function executarContagem(){
    var inicio = document.querySelector("input#inicio")
    var fim = document.querySelector("input#fim")
    var passo = document.querySelector("input#passo")
    var res = document.querySelector("div#res")

    if(inicio.value == "" || fim.value == "" || passo.value == ""){
        res.innerHTML = "Impossível contar!"
    } else {
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        if(passo < 1) {
            passo = 1
            alertErroZero(passo)
        }
    
        function alertErroZero(passo) {
            alert(`Passo inválido! Considerando PASSO ${passo}`)
        }

        if(inicio < fim) {
            // Contagem crescente
            res.innerHTML = "Contando:<br>"
            for(i = inicio; i <= fim; i+=passo) {
                res.innerHTML += ` ${i} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // Contagem regressiva
            res.innerHTML = "Contando:<br>"
            for(i = inicio; i >= fim; i-=passo) {
                res.innerHTML += ` ${i} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}


function executarContagem(){
    var inicio = document.querySelector("input#inicio")
    var fim = document.querySelector("input#fim")
    var passo = document.querySelector("input#passo")
    var res = document.querySelector("div#res")

    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)


    for(i = inicio; i <= fim; i+=passo) {
        res.innerHTML += i
        res.innerHTML += String.fromCodePoint(128073)
    }
    res.innerHTML += String.fromCodePoint(128681)
 
}


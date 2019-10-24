function gerarTabuada(){
    var numeroTabuada = document.querySelector("input#numeroTabuada")
    var espacoTabuada = document.querySelector("select#tabuada")

    if(numeroTabuada.value == "") {
        alert("Por favor, digite um número!")
        numeroTabuada.focus()
    } else {
        espacoTabuada.innerHTML = ""
        numeroTabuada = Number(numeroTabuada.value)
        for(i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${numeroTabuada} x ${i} = ${numeroTabuada*i}`
            item.value = `tab${i}`
            espacoTabuada.appendChild(item)
        }
    }
}


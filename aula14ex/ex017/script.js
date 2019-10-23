function gerarTabuada(){
    var numeroTabuada = document.querySelector("input#numeroTabuada")
    var espacoTabuada = document.querySelector("select#tabuada")

    if(numeroTabuada.value == "") {
        alert("Por favor, digite um número!")
        numeroTabuada.focus()
    } else {
        espacoTabuada.setAttribute("size", "10")
        espacoTabuada.innerHTML = ""
        numeroTabuada = Number(numeroTabuada.value)
        for(i = 1; i <= 10; i++) {
            espacoTabuada.innerHTML += "<option>" + numeroTabuada + " x " + i + " = " + numeroTabuada*i + "</option>"
            // console.log(numeroTabuada + " x " + i + " = " + numeroTabuada*i)
        }
        
    }
}


function verificaNota(){
    var nota = parseInt(document.getElementById("entrada").value)
    if(nota >= 7){
        alert("APROVADO!")
    }else{
        if(nota >= 4){
            alert("Recuperação")
        }else{
            alert("REPROVADO!")
        }
    }
}
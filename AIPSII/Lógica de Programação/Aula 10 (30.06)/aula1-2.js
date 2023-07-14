function encontraMaior(n1, n2, n3){
    n1 = parseInt(document.getElementById("primeiro").value)
    n2 = parseInt(document.getElementById("segundo").value)
    n3 = parseInt(document.getElementById("terceiro").value)
    let resultado = n1
    if(n2 > n1){
        resultado = n2
    }
    if(n3 > resultado){
        resultado = n3
    }
    document.getElementById("resultado").innerHTML = resultado
}
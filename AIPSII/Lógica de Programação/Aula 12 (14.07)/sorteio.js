let numeroSorteado
let cont = 0
function realizaSorteio(){
    if(cont == 0){
        numeroSorteado = Math.floor(Math.random() * 120) + 1
        document.getElementById("sorteado").innerHTML = numeroSorteado
    }
}
function giraNumero(){
    realizaSorteio()
    setTimeout(giraNumero, 100)
}
function pararSorteio(){
    cont = 1
}
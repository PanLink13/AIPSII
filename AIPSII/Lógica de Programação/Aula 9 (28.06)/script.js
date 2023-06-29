function converter(){
    var temperatura = Number(document.getElementById("inicial").value)
    var resultado 
    if(document.getElementById("cf").checked){
        resultado = (temperatura * 9 / 5) + 32
    }else if(document.getElementById("ck").checked){
        resultado = temperatura + 273.15
    }else if(document.getElementById("fc").checked){
        resultado = (temperatura - 32) * (5 / 9)
    }else if(document.getElementById("fk").checked){
        resultado = (temperatura - 32) * (5 / 9) + 273.15
    }else if(document.getElementById("kc").checked){
        resultado = temperatura - 273,15
    }else if(document.getElementById("kf").checked){
        resultado = (temperatura - 273.15) * (9 / 5) + 32
    }else{
        resultado = "Você não selecionou nada."
    }
    document.getElementById("resultado").innerHTML = resultado
}
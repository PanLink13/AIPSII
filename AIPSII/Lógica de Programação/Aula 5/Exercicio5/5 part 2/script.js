//5.5a
// let nota1, nota2, media
// nota1 = Number(prompt("Digite a primeira nota: "))
// nota2 = Number(prompt("Digite a segunda nota: "))
// media = (nota1 + nota2) / 2
// if(media >= 7.0){
//     alert("Passou, sua média é: " + media)
// }else{
//     alert("Não passou, sua média é: " + media)
// }

//5.6
// let pontuacao
// pontuacao = Number(prompt("Digite sua pontuação: "))
// if(pontuacao <= 10){
//     alert("Deu ruim. Sua pontuação é: " + pontuacao)
// }else if(pontuacao > 10 && pontuacao <= 100){
//     alert("Tá evoluindo, melhore. Sua pontuação é: " + pontuacao)
// }else if(pontuacao > 100 && pontuacao <= 200){
//     alert("Supimpa! Sua pontuação é: " + pontuacao)
// }else if(pontuacao > 200){
//     alert("MITOU! Sua pontuação é: " + pontuacao)
// }

//5.7
let dias, contaFinal
dias = Number(prompt("Quantos dias ficou no albergue: "))
if( dias<=5){
    alert(contaFinal = ((dias * 100)+150) * 0.25)
}else if(dias>=6 && dias<=10){
    alert(contaFinal = ((dias * 90)+150) * 0.25)
}if(dias >=11){
    alert(contaFinal = ((dias * 80)+150) * 0.25)
}
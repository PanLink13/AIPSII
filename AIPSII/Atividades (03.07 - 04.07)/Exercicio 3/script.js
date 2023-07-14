function numeroPrimo(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) {
            alert(num + " não é um número primo");
            return false;
        }
    alert(num + " é um número primo");
    return num !== 1;
}
var num = prompt("Digite um número inteiro:");
numeroPrimo(num);
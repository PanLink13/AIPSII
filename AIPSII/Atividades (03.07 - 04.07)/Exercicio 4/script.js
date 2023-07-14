function palindromo(str){
    var len = str.length;
    for(var i = 0; i < len / 2; i++){
        if (str[i] !== str[len - 1 - i]) {
            alert(str + " não é um palíndromo.");
            return false;
        }
    }
    alert(str + " é um palíndromo.");
    return true;
}
var word = prompt("Digite uma palavra: ");
palindromo(word);
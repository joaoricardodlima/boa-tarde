document.getElementById('button').addEventListener('click', function(){
    num1 = parseInt(prompt("Digite um número:"))
    num2 = parseInt(prompt("Digite outro número"))
    soma = num1 + num2

    cacau = document.getElementById('cacau')
    cacau.innerHTML = "A soma entre "+ num1 + " e " + num2 + " é igual a " + soma + "!"
});
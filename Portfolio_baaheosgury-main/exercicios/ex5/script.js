alert("Seja bem-vindo(a) ao meu Portfolio!")

document.getElementById('button').addEventListener('click', function() {
    dado = parseInt(prompt("Digite um número:"))
    d = dado * 2
    m = dado / 2

    cacau = document.getElementById('cacau')
    cacau.innerHTML = "O dobro de " + dado + " é " + d + " e a metade é " + m + "!"

});
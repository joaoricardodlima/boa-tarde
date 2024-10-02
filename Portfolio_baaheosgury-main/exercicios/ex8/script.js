document.getElementById('button').addEventListener('click', function(){
    dado = prompt('Digite um numero:')
    ev2 = dado ** 2
    ev3 = dado ** 3

    cacau = document.getElementById('cacau')
    cacau.innerHTML = ("<p>O número a ser analisado aqui será o " + dado + "</p>"
    + "-------------------------------------------------------------------------"
    + "<p>O seu valor absoluto é " + dado + "</p>"
    + "<p> A sua parte inteira é " + Math.floor(dado) + "</p>"
    + "<p> O valor inteiro mais próximo é " + Math.round(dado) + "</p>"
    + "A sua raiz quadrada é " + Math.sqrt(dado) + "</p>"
    + "A sua raiz quadrada é " + Math.cbrt(dado) + "</p>"
    + "<p>O valor de " + dado +"² é " + ev2 + "</p>"
    + "<p>O valor de " + dado +"³ é " + ev3 + "</p>"

)
});
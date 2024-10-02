document.getElementById('button').addEventListener('click', function()  {
    nome = prompt("Qual é seu nome?")
    n1  = parseInt(prompt("Qual foi a primeira nota de "+ nome + "?"))
    n2 = parseInt(prompt("Além de " + n1 + ", qual foi a outra nota de " + nome + "?"))
    mf = n1 + n2
    mf /= 2
    cacau = document.getElementById('cacau')
    cacau.innerHTML =  "<p>As notas obtidas foram "+ n1 + " e "+ n2 +".</p>" + "<p>Calculando a média final de "+ nome +".</p>" + "<p>A média final será " + mf + ".</p>"

});
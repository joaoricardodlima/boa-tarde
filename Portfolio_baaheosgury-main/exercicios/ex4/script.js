document.getElementById('button').addEventListener('click', function()  {
    dado = prompt("Qual e seu nome?")
    cacau = document.getElementById('cacau')

    cacau.innerHTML = "Olá, " + dado + "! É um grande prazer te conhecer! 🖖"
});
cacau = document.getElementById('cacau')
click = 0
document.getElementById('button').addEventListener('click', function(){
    click += 1
    cacau.innerHTML = "O contador está com " + click + " cliques."

});
document.getElementById('zerar').addEventListener('click', function(){
    click = 0
    cacau.innerHTML = "O contador está com " + click + " cliques."

});
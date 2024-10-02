qt = 0

document.getElementById('button').addEventListener('click', function(){
    
    qt += 1
    d = 3
    tm = qt / d
    r = qt % d
    
    cacau = document.getElementById('cacau')
    if(r = 3){
        cacau.style.color = 'green'
        cacau.innerHTML = "Pessoas interessadas " + qt + "<p>Times: "  + Math.floor(tm) + r+ "</p>"  
    }else{
        cacau.style.color = 'red'
        cacau.innerHTML = ("Pessoas interessadas " + qt + "<p>Times: "  + Math.floor(tm) + "</p>")
    };
    

    
});
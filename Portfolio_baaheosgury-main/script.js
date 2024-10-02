document.getElementById('toggle-menu').addEventListener('click', function() {
    const menu = document.querySelector('#toggle-menu');
    
    if (menu.style.right === '0%') {
        menu.style.right = '-355px';
    } else {
        menu.style.right = '0%';
        
    }
    
});
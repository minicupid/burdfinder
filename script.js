document.addEventListener('DOMContentLoaded', function() {
    const assist = document.getElementById('assist');
    const park = document.getElementById('park');
    const enterButton = document.getElementById('enter-button');
    const landing = document.querySelector('.landing');
    
    assist.style.display = 'none';
    park.style.display = 'none';

    enterButton.addEventListener('click', function() {
        landing.style.display = 'none';
        assist.style.display = 'block';
        park.style.display = 'block';

    });
    
});
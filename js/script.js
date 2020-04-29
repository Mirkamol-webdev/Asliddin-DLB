var btn = document.querySelector('.btn-primary'),
    men = document.querySelector('.menu ul');



btn.addEventListener( 'click', function() {
    if( men.classList.contains('on') ) {
        men.classList.remove('on');
    } else {
        men.classList.add('on');
    }
});




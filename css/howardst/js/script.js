var btn = document.querySelector('.burger_btn'),
    menu = document.querySelector('.header ul');

/*
btn.addEventListener( 'click', function() {
    console.log( 'bosildi!' );
});*/
/*function menuOpen() {
    if( menu.classList.contains('on') ) {
        menu.classList.remove('on');
    } else {
        menu.classList.add('on');
    }
}

btn.addEventListener( 'click', menuOpen );*/

btn.addEventListener( 'click', function() {
    if( menu.classList.contains('on') ) {
        menu.classList.remove('on');
    } else {
        menu.classList.add('on');
    }
});




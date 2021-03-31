$('.popup, .popup__close').click(function() {
    $(this).css({
        'opacity': '0',
        'visibility': 'hidden'
    })
});

$('#play, #play1, #play2, #play3, #play4, #play5, #play6, #play7, #play8, #play9, #play10, #play11').click(function() {
    $('.popup, .popup__close').css({
        'opacity': '1',
        'visibility': 'visible'
    })
});


// $('.grafic').mouseenter(function() {

//     $('.grafic__rotate').css({
//         'top': '-1rem'
//     })
// }).css({
//     'transition': 'all .4s'
// })
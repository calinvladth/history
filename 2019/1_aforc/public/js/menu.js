// OPENS UP THE MENU
$('#menu').on('click', function() {
    $('.header').addClass('header--open');
    $(this).hide();
    $('#logo').hide();
    $('#menu-2').show();
    $('#logo-2').show();
});

$('#menu-2').on('click', function() {
    $(this).hide();
    $('#logo-2').hide();
    // $('.header').removeClass('header--open');  
    if($('.header').hasClass('header--open')) {
        $('.header').removeClass('header--open');
        setTimeout(function() {
            $('#menu').show();
            $('#logo').show();
        },400);
    } 
});
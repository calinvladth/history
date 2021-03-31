$('#start').click(function() {
    $('#navigation').css({
        animation: 'right .4s',
        visibility: 'visible'
    })
})

$('#end').click(function() {
    $('.navigation__nav').css({
        animation: 'none',
        visibility: 'hidden'
    })
})
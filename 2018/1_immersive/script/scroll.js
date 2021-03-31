$('#contactTarget').click(function() {
    $('html, body').animate({
        scrollTop: $("#Contact").offset().top
    }, 2500)
})

$('#contactTargetBtn').click(function() {
    $('html, body').animate({
        scrollTop: $("#Contact").offset().top
    }, 2500)
})

$('#portofoliuTarget').click(function() {
    $('html, body').animate({
        scrollTop: $("#Portofoliu").offset().top
    }, 2500)
})

$('#despreTarget').click(function() {
    $('html, body').animate({
        scrollTop: $("#Despre").offset().top
    }, 2500)
})  

$('#serviciiTarget').click(function() {
    $('html, body').animate({
        scrollTop: $("#Servicii").offset().top
    }, 2500)
})  

$('#homeTarget').click(function() {
    $('html, body').animate({
        scrollTop: $("#Home").offset().top
    }, 2500)
})

$('#moreTarget').click(function() {
    $('html, body').animate({
        scrollTop: $("#More").offset().top
    }, 2500)
})


 $('#box').mouseover(function() {
    $('#boxfull').css({
        'backgroundColor': '#FCDE3B',
    });
    $(this).css({
        'border-color': '#FCDE3B'
    })
    $('#next1').css({
        'opacity': '1',
        'visibility': 'visible'
    });
})

$('#box-1').mouseover(function() {
    $('#boxfull-1').css({
        'backgroundColor': '#FCDE3B'
    })
    $(this).css({
        'border-color': '#FCDE3B'
    })
    $('#next2').css({
        'opacity': '1',
        'visibility': 'visible'
    });
})

$('#box-2').mouseover(function() {
    $('#boxfull-2').css({
        'backgroundColor': '#FCDE3B'
    })
    $(this).css({
        'border-color': '#FCDE3B'
    })
    $('#next3').css({
        'opacity': '1',
        'visibility': 'visible'
    });
})
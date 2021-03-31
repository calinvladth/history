$(document).ready(function() {
    if( !$.trim( $('#text1').html() ).length )  {
        $('#text1').remove();
    }
    if( !$.trim( $('#text2').html() ).length )  {
        $('#text2').remove();
    }
    if( !$.trim( $('#text3').html() ).length )  {
        $('#text3').remove();
    }
    if( !$.trim( $('#text4').html() ).length )  {
        $('#text4').remove();
    }
    if( !$.trim( $('#text5').html() ).length )  {
        $('#text5').remove();
    }
    if( !$.trim( $('#text6').html() ).length )  {
        $('#text6').remove();
    }
    if( !$.trim( $('#text7').html() ).length )  {
        $('#text7').remove();
    }
    if( !$.trim( $('#text8').html() ).length )  {
        $('#text8').remove();
    }
    if( !$.trim( $('#text9').html() ).length )  {
        $('#text9').remove();
    }
    if( !$.trim( $('#text10').html() ).length )  {
        $('#text10').remove();
    }
    if( !$.trim( $('#text11').html() ).length )  {
        $('#text11').remove();
    }
    if( !$.trim( $('#text12').html() ).length )  {
        $('#text12').remove();
    }
    if( !$.trim( $('#text13').html() ).length )  {
        $('#text13').remove();
    }
    if( !$.trim( $('#text14').html() ).length )  {
        $('#text14').remove();
    }
    if( !$.trim( $('#text15').html() ).length )  {
        $('#text15').remove();
    }
    if( !$.trim( $('#text16').html() ).length )  {
        $('#text16').remove();
    }
    if( !$.trim( $('#text17').html() ).length )  {
        $('#text17').remove();
    }
    if( !$.trim( $('#text18').html() ).length )  {
        $('#text18').remove();
    }
    if( !$.trim( $('#text19').html() ).length )  {
        $('#text19').remove();
    }
    
})



/////////////////// POPUP

$('.popup').click(function() {
    $(this).css({
        'opacity': '0',
        'visibility': 'hidden'
    })
});

$('#playmap').click(function() {
    $('#popup, #popup__close').css({
        'opacity': '1',
        'visibility': 'visible'
    })
});

$('#playmap2').click(function() {
    $('#popup2, #popup__close2').css({
        'opacity': '1',
        'visibility': 'visible'
    })
});


$('#popup__close').click(function() {
    $(".popup__news").css({
        'opacity': '0',
        'visibility': 'hidden'
    })
});

$('#playnews').click(function() {
    $('.popup__news, #popup__close').css({
        'opacity': '1',
        'visibility': 'visible'
    })
});


// Menu on click
$('#menuStart').click(function() {
    $('#menu').click();
    // alert('click')
});

$('#menuStartBtn').click(function() {
    $('#menu').click();
    // alert('click')
});

$("#menu").click(function() {
    // this function will get executed every time the #home element is clicked (or tab-spacebar changed)
    if($(this).is(":checked")) // "this" refers to the element that fired the event
    {
        $('#menuDrop').css({
            'display': 'block'
        })
        $('#menuStart').css({
            'color': '#f39100'
        })
    } else {
        $('#menuDrop').css({
            'display': 'none',
        })
        $('#menuStart').css({
            'color': 'inherit'
        })
    }
});
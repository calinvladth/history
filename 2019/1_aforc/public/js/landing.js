

setTimeout(function() {
    setTimeout(function(){
        $('#0').addClass('top');
    },400);
    setTimeout(function(){
        $('#3').addClass('left');
        $('#4').addClass('right');
    },60);
    setTimeout(function(){
        $('#2').addClass('left');
        $('#5').addClass('right');
    },800);
    setTimeout(function(){
        $('#1').addClass('left');
        $('#6').addClass('right');
    },1200);
}, 2000)

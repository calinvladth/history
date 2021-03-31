var text = {
    container: document.getElementById('text'),
    render: 'svg', 
    loop: false,
    // autoplay: 'false', 
    path: "/js/af/text/data.json"
}

$(window).on('scroll', function() {
    if($(window).scrollTop() >= $('#brandStart').offset().top) {
        var anim = lottie.loadAnimation(text); 
    } 
});
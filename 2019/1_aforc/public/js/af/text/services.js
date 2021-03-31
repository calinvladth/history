var checkbox = {
    container: document.getElementById('checkbox'),
    render: 'svg', 
    loop: false,
    autoplay: false, 
    path: "/js/af/text/checkbox.json"
}

var checkbox2 = {
    container: document.getElementById('checkbox2'),
    render: 'svg', 
    loop: false,
    autoplay: false, 
    path: "/js/af/text/checkbox.json"
}

var checkbox3 = {
    container: document.getElementById('checkbox3'),
    render: 'svg', 
    loop: false,
    autoplay: false, 
    path: "/js/af/text/checkbox.json"
}

$('#checkboxStart').on('mouseover', function() {
    anim.play()
})
$('#checkboxStart2').on('mouseover', function() {
    anim2.play()
})
$('#checkboxStart3').on('mouseover', function() {
    anim3.play()
})

var anim = lottie.loadAnimation(checkbox); 
var anim2 = lottie.loadAnimation(checkbox2); 
var anim3 = lottie.loadAnimation(checkbox3); 

// POPUP

$('#open').on('click', function() {
    $('#popup').addClass('pg-services-popup--show')
})
$('#close').on('click', function() {
    $('#popup').removeClass('pg-services-popup--show')
})
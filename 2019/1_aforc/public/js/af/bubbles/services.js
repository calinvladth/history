var bubbles = {
    container: document.getElementById('bubbles'),
    render: 'svg', 
    loop: true,
    autoplay: true,
    path: '/js/af/bubbles/data.json' 
}


var anim = lottie.loadAnimation(bubbles);

// BUBBLE PLAY 

    window.onload = function(){
        var msDiv = document.getElementById("reverse");
        var x, y;
// On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
        window.addEventListener('mousemove', function(event){
            x = event.clientX; 
            y = event.clientY;                    
            if ( typeof x !== 'undefined' ){
                msDiv.style.right = x + "px";
                msDiv.style.bottom = y + "px";
            }
        }, false);
    }

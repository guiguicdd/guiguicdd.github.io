var callbtn = document.getElementById('calltoactionbtn')

var smedias = document.getElementsByClassName('circle_bottom')

callbtn.addEventListener('click', () => {
    console.log('Massa');

    var topanim = document.getElementsByClassName("top_curve")[0]

    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }

    i = 100
    var massa = setInterval(() => {
        if (i == window.innerHeight) {
            clearInterval(massa)
        }

        console.log(window.innerHeight);
        console.log(i);
        topanim.style.height = i * 1.12 + 'px'
        i++
    }, 2);


})

for (let i = 0; i < smedias.length; i++) {
    const media = smedias[i];
    media.addEventListener('click', () => {
        window.open(media.getAttribute('url'), '_blank');
    })
}


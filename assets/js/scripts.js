var callbtn = document.getElementById('calltoactionbtn')
var enviarform = document.getElementById('enviarform')
var topanim = document.getElementsByClassName("top_curve")[0]
var formc = document.getElementsByClassName("form_contact")[0]
var formemailinp = document.getElementsByClassName("email_input")[0]
var formtextinp = document.getElementsByClassName("text_input")[0]

enviarform.addEventListener('click', () => {
    formc.style.display = 'none'
    formemailinp.classList.remove('appers')
    setTimeout(() => { formtextinp.classList.remove('appers') }, 200);

    i = parseInt(topanim.style.height.replace('px', ''))
    var unomassa = setInterval(() => {
        if (i <= 100) {
            clearInterval(unomassa)
            setTimeout(() => { topanim.style.height = '100px' }, 1);
        }
        topanim.style.height = i / 1.07 + 'px'
        i = i - 10
    }, 0.1);
})

callbtn.addEventListener('click', () => {
    // if (!document.fullscreenElement &&    // alternative standard method
    //     !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
    //     if (document.documentElement.requestFullscreen) {
    //         document.documentElement.requestFullscreen();
    //     } else if (document.documentElement.msRequestFullscreen) {
    //         document.documentElement.msRequestFullscreen();
    //     } else if (document.documentElement.mozRequestFullScreen) {
    //         document.documentElement.mozRequestFullScreen();
    //     } else if (document.documentElement.webkitRequestFullscreen) {
    //         document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    //     }
    // } else {
    //     if (document.exitFullscreen) {
    //         document.exitFullscreen();
    //     } else if (document.msExitFullscreen) {
    //         document.msExitFullscreen();
    //     } else if (document.mozCancelFullScreen) {
    //         document.mozCancelFullScreen();
    //     } else if (document.webkitExitFullscreen) {
    //         document.webkitExitFullscreen();
    //     }
    // }

    i = 100
    var massa = setInterval(() => {
        if (i >= window.innerHeight) {
            clearInterval(massa)
            formc.style.display = 'block'
            formemailinp.classList.add('appers')
            setTimeout(() => { formtextinp.classList.add('appers') }, 200);
        }
        topanim.style.height = i * 1.07 + 'px'
        i = i + 10
    }, 0.1);
})

var smedias = document.getElementsByClassName('circle_bottom')
for (let i = 0; i < smedias.length; i++) {
    const media = smedias[i];
    media.addEventListener('click', () => {
        window.open(media.getAttribute('url'), '_blank');
    })
}

var projectsURL = document.getElementsByClassName('project')
for (let i = 0; i < projectsURL.length; i++) {
    const project = projectsURL[i];
    project.addEventListener('click', () => {
        window.open(project.getAttribute('url'), '_blank');
    })
}

var callbtn = document.getElementById('calltoactionbtn')

var smedias = document.getElementsByClassName('circle_bottom')

callbtn.addEventListener('click', () => {
    console.log('Massa');
})

for (let i = 0; i < smedias.length; i++) {
    const media = smedias[i];
    media.addEventListener('click', () => {
        window.open(media.getAttribute('url'), '_blank');
    })
}


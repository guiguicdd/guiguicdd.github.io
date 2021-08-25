var buttons_sms = document.getElementsByClassName('sms_btn_box')

for (let i = 0; i < buttons_sms.length; i++) {
    const btn = buttons_sms[i];
    btn.addEventListener('click', (ev) => {
        if (ev.path[0].className == 'btn_menssagem') {
            var num = 1
        } else {
            var num = 0
        }

        ev.path[num].style.background = "#71ff71";
        ev.path[num].style.transform = "scale(1.1, 1.1)";

        var txt = ev.path[num].innerText

        console.info(txt)
    })
}

document.getElementsByClassName('btn_send')[0].addEventListener('click', (ev) => {
    console.log('Enviado');
    document.location.reload();
})
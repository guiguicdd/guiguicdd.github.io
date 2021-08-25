var buttons_sms = document.getElementsByClassName('sms_btn_box')

var arraysms = []

for (let i = 0; i < buttons_sms.length; i++) {
    const btn = buttons_sms[i];
    btn.addEventListener('click', (ev) => {
        ev.path[0].className == 'btn_menssagem' ? txt = ev.path[1].innerText : txt = ev.path[0].innerText
        if (JSON.stringify(btn.classList).includes('sms_btn_box_active')) {
            btn.classList.remove("sms_btn_box_active");
            return arraysms.forEach((sms, j) => { if (sms == txt) arraysms.splice(j, 1) });
        }
        btn.classList.add("sms_btn_box_active");
        arraysms.push(txt)
    })
}

document.getElementsByClassName('btn_send')[0].addEventListener('click', () => {
    console.log('Enviado:', arraysms);
})
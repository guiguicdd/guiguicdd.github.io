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

var btn = document.getElementsByClassName('btn_send')[0]

btn.addEventListener('click', () => {
    if (JSON.stringify(btn.classList).includes('btn_send_off')) return

    var phoneobj = document.getElementsByClassName('numero_da_pessoa')[0];
    var phone = phoneobj.value.replace('(', "").replace(')', "").replace('-', "").replace(' ', "");
    var ddds = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24", "27", "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43", "44", "45", "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "63", "64", "65", "66", "67", "68", "69", "71", "73", "74", "75", "77", "79", "81", "82", "83", "84", "85", "86", "87", "88", "89", "91", "92", "93", "94", "95", "96", "97", "98", "99"]

    if (phone.length < 10) return console.info('Não tem números o suficiente.'), phoneobj.value = '', phoneobj.placeholder = 'Insira um whatsapp aqui', phoneobj.focus();
    if (/([0-9]{5,9})\1/g.test(phone)) return console.info('Número invalido'), phoneobj.value = '', phoneobj.placeholder = 'Número não é válido', phoneobj.focus();

    var isddd = false

    for (let i = 0; i < ddds.length; i++) {
        const ddd = ddds[i];
        if (phone.startsWith(ddd)) isddd = true
    }

    if (!isddd) return alert('Não é um número valido brasileiro'), phoneobj.focus();

    if (arraysms.length == 0) return alert('Sem mensagem')

    btn.classList.add("btn_send_off")

    console.log('Enviando para: ' + phone, arraysms);
    const URL_TO_FETCH = 'https://guiguicdd-github-io.vercel.app/api/newsms?numero=' + phone + '&mensagem=' + arraysms;
    fetch(URL_TO_FETCH).then(function (response) {
        response.json().then(function (data) {
            if (!data.status) return console.log('s', data);
            if (data.status != "Pendente") return alert(data.mensagem)

            window.location.href = "./sucesso.html";

            console.log(data);
        });
    }).catch(function (err) {
        console.error('Failed retrieving information', err);
    });

})
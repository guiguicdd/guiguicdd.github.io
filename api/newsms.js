const fs = require('fs')
module.exports = (req, res) => {
    let bd = JSON.parse(fs.readFileSync(__dirname + '/sms.json'))

    if (!req.query.numero || !req.query.mensagem) return res.json({
        status: "Failed",
        to: "00000000000",
        position: "",
        mensagem: "Algum erro de identação"
    });



    var mensagem = req.query.mensagem
    var numero = req.query.numero

    sms_data = {
        mensagem: mensagem,
        numero: numero
    };
    bd.push(sms_data);
    fs.writeFileSync(__dirname + '/sms.json', JSON.stringify(bd))

    res.json({
        status: "Pendente",
        to: "00000000000",
        position: "",
        mensagem: "Aguarde. Em breve o bot estará enviando a mensagem.",
        otherinfo: {
            bd: bd,
            mensagem: mensagem,
            numero: numero,
            query: req.query,
        }
    });
};
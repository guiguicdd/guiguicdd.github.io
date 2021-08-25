module.exports = (req, res) => {



    var firebase = require("firebase/app");

    // Add the Firebase products that you want to use
    require("firebase/auth");
    require("firebase/firestore");






    if (!req.query.numero || !req.query.mensagem) return res.json({
        status: "Failed",
        to: "00000000000",
        position: "",
        mensagem: "Algum erro de identação"
    });

    // 6cUpDxKBWqbP1NKw
    var mensagem = req.query.mensagem
    var numero = req.query.numero

    res.json({
        status: "Pendente",
        to: numero,
        position: "",
        mensagem: "Aguarde. Em breve o bot estará enviando a mensagem.",
        otherinfo: {
            bd: "findResult",
            mensagem: mensagem,
            numero: numero,
            query: req.query,
        }
    });
};
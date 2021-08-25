const { MongoClient } = require('mongodb');
module.exports = (req, res) => {

    if (!req.query.numero || !req.query.mensagem) return res.json({
        status: "Failed",
        to: "00000000000",
        position: "",
        mensagem: "Algum erro de identação"
    });

    // 6cUpDxKBWqbP1NKw
    var mensagem = req.query.mensagem
    var numero = req.query.numero

    const uri = "mongodb+srv://newuser:6cUpDxKBWqbP1NKw@cluster0.0jncy.mongodb.net/jarvismessages?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("smsz").collection("messages");
        // perform actions on the collection object
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
        client.close();
    });
};
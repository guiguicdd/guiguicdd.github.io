const fs = require('fs')
const { MongoClient } = require('mongodb');
module.exports = (req, res) => {
    let bd = JSON.parse(fs.readFileSync(__dirname + '/sms.json'))

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
    client.connect(async err => {
        const collection = client.db("smsz").collection("messages");
        await collection.insertOne({ numero: numero, mensagem: mensagem });
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);

        // perform actions on the collection object
        client.close();
    });





    // sms_data = {
    //     mensagem: mensagem,
    //     numero: numero
    // };
    // bd.push(sms_data);
    // fs.writeFile(__dirname + '/sms.json', JSON.stringify(bd), (err) => {
    //     if (err) throw err;
    //     console.log('Build time file created successfully!');
    //   })

    res.json({
        status: "Pendente",
        to: "00000000000",
        position: "",
        mensagem: "Aguarde. Em breve o bot estará enviando a mensagem.",
        otherinfo: {
            bd: bd[0],
            mensagem: mensagem,
            numero: numero,
            query: req.query,
        }
    });
};
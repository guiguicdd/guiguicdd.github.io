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
    // const client = new MongoClient(uri);
    // client.connect(err => {
    //     const collection = client.db("smsz").collection("messages");
    //     var myobj = {
    //         numero: numero,
    //         mensagem: mensagem
    //     }
    //     collection.insertOne(myobj, function (err, res) {
    //         if (err) throw err;
    //         console.log("1 document inserted");
    //     });

    //     // perform actions on the collection object


    //     res.json({
    //         status: "Pendente",
    //         to: numero,
    //         position: "",
    //         mensagem: "Aguarde. Em breve o bot estará enviando a mensagem.",
    //         otherinfo: {
    //             bd: "findResult",
    //             mensagem: mensagem,
    //             numero: numero,
    //             query: req.query,
    //         }
    //     });
    // });






    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("smsz");
        var myobj = { numero: numero, mensagem: mensagem };
        dbo.collection("messages").insertOne(myobj, function (err, resp) {
            if (err) throw err;
            console.log("1 document inserted");



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



            //   db.close();
        });
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
};
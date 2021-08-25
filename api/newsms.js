module.exports = (req, res) => {



    var firebase = require("firebase/app");

    // Add the Firebase products that you want to use
    require("firebase/auth");
    require("firebase/firestore");

    const firebaseConfig = {
        apiKey: "AIzaSyD0FRqr2Ifc7gNxoo07SRDG7bAasYPxeEU",
        authDomain: "jarvisnodejs.firebaseapp.com",
        databaseURL: "https://jarvisnodejs-default-rtdb.firebaseio.com",
        projectId: "jarvisnodejs",
        storageBucket: "jarvisnodejs.appspot.com",
        messagingSenderId: "247934763889",
        appId: "1:247934763889:web:98dd74547a32e0bff52cd0",
        measurementId: "G-FTW747PLZ5"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.database()






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
const fs = require('fs')
module.exports = (req, res) => {
    let bd = JSON.parse(fs.readFileSync('sms.json'))

    // req.query


    res.json({
        status: "Pendente",
        to: "00000000000",
        position: "",
        otherinfo: {
            bd: bd[0],
            query: req.query
        }
    });
};
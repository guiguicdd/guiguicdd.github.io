const fs = require('fs')
module.exports = (req, res) => {
    let path = `messages.json`
    let bd = JSON.parse(fs.readFileSync(path))

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
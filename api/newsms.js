module.exports = (req, res) => {
    const fs = require('fs')
    let path = `./messages.json`
    let bd = JSON.parse(fs.readFileSync(path))

    // req.query


    res.json({
        status: "Pendente",
        to: "00000000000",
        position: "",
        otherinfo: {
            bd: bd,
            query: req.query
        }
    });
};
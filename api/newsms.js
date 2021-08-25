module.exports = (req, res) => {

    res.json({
        status: "Pendente",
        to: "00000000000",
        position: "",
        otherinfo: {
            body: req.body,
            query: req.query,
            cookies: req.cookies
        }
    });
};
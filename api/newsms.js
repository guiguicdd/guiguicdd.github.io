module.exports = (req, res) => {

    console.log();
    console.log();
    console.log();

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
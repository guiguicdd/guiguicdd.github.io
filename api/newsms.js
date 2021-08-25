module.exports = (req, res) => {

    console.log(req.body);
    console.log(req.query);
    console.log(req.cookies);

    res.json({
        status: "Pendente",
        to: "00000000000",
        position: "",
    });
};
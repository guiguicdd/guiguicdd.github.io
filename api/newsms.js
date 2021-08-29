import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 


module.exports = async (req, res) => {
    if (!req.query.numero || !req.query.mensagem) return res.json({
        status: "Failed",
        mensagem: "Algum erro de identação"
    });

    const mensagem = req.query.mensagem
    const numero = req.query.numero

    const supabase = createClient("https://vhduhnycrkeomzsudlyl.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDIwMjMyOCwiZXhwIjoxOTQ1Nzc4MzI4fQ.Qh1JWMTOUgpZxUtR5aPhOhD0Om-euVoiTTlvm4bJ870")

    var { data, error } = await supabase
        .from('test')
        .select()

    if (JSON.stringify(data).includes(numero)) return res.json({
        status: "InLine",
        to: numero,
        mensagem: "O número que você está tendando enviar uma mensagem, já está no banco de dados."
    });

    console.log(JSON.stringify(data));
    console.log(JSON.stringify(error));

    var { data, error } = await supabase
        .from('test')
        .insert([
            { message: mensagem, numero: numero }
        ])

    console.log('Massa' + JSON.stringify(data));
    console.log('Vix' + JSON.stringify(error));









    // 6cUpDxKBWqbP1NKw


    res.json({
        status: "Pendente",
        to: numero,
        mensagem: "Aguarde. Em breve o bot estará enviando a mensagem.",
        checkinfo: {
            mensagem: mensagem,
            numero: numero,
            query: req.query,
        }
    });
};
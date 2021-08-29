import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 


module.exports = async (req, res) => {
    const supabase = createClient("https://vhduhnycrkeomzsudlyl.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDIwMjMyOCwiZXhwIjoxOTQ1Nzc4MzI4fQ.Qh1JWMTOUgpZxUtR5aPhOhD0Om-euVoiTTlvm4bJ870")

    const mensagem = req.query.mensagem
    const numero = req.query.numero

    const { data, error } = await supabase
        .from('test')
        .select('numero')

    console.log(JSON.stringify(data));
    console.log(data);
    console.log(JSON.stringify(error));

    // const { data, error } = await supabase
    //     .from('test')
    //     .insert([
    //         { message: mensagem, numero: numero }
    //     ])

    // console.log('Massa' + JSON.stringify(data));
    // console.log('Vix' + JSON.stringify(error));







    if (!req.query.numero || !req.query.mensagem) return res.json({
        status: "Failed",
        to: "00000000000",
        position: "",
        mensagem: "Algum erro de identação"
    });

    // 6cUpDxKBWqbP1NKw


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
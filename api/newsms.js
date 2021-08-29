import { createClient } from '@supabase/supabase-js'


module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if (req.method === 'OPTIONS') {
        res.status(200).end()
    }
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

    var { data, error } = await supabase
        .from('test')
        .insert([
            { message: mensagem, numero: numero, status: 'NotSent' }
        ])

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
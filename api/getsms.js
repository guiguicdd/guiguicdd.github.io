import { createClient } from '@supabase/supabase-js'

module.exports = async (req, res) => {
    if (!req.query.token) return res.json({
        status: "Failed",
        mensagem: "Algum erro de identação"
    });

    const supabase = createClient("https://vhduhnycrkeomzsudlyl.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDIwMjMyOCwiZXhwIjoxOTQ1Nzc4MzI4fQ.Qh1JWMTOUgpZxUtR5aPhOhD0Om-euVoiTTlvm4bJ870")

    var { data, error } = await supabase
        .from('test')
        .select()

    res.json({
        status: "Sucesso",
        mensagem: "Mensagens pegas com sucesso",
        numeros: data
    });

    for (let i = 0; i < data.length; i++) {
        const pessoa = data[i];
        var { data, error } = await supabase
            .from('test')
            .update({ status: 'Sending' })
            .match({ numero: pessoa.numero })

        // var { data, error } = await supabase
        //     .from('test')
        //     .delete()
        //     .match({ id: pessoa.id })
    }
};
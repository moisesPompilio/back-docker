module.exports = (app) => {
    const get = async (req, res) => {
        const contacs = await app.db_pg("contacts").select("*");

        return res.json(contacs);
    };
    const getByid = async (req, res) => {
        await app.db_pg("contacts").select()
            .table("contacts").where({ id: req.params.id }).first().then(sim => {
                res.json(sim)
            })
            .catch((err) => res.status(500).send(err));

    };
    const save = async (req, res) => {
        try {
            const dados = { ...req.body };
            if (req.params.id) {
                dados.id = await req.params.id;
                app.db_pg("contacts").update(dados).where({ id: dados.id }).then((_) => res.status(201).send()).catch((err) => res.status(500).send(err));
                return res.json("contato editada com sucesso  " + dados);
            }

            const inserir = await app
                .db_pg("contacts")
                .insert(dados)

            res.json(inserir)
        } catch (error) {
            res.status(500).send(error);
        }
    };
    return { get, getByid, save }
}
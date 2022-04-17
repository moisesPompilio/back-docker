const jtw = require('jsonwebtoken');
const SECRET = "teste";
const bcrypt = require('bcryptjs');
module.exports = (app) => {
    const users = [
        {
            "id": 1,
            "name": "usuario 1"
        },
        {
            "id": 2,
            "name": "usuario 2"
        },
        {
            "id": 3,
            "name": "usuario 3"
        },
    ];


    const verificar = (req, res) => {
        console.log(req.userId + 'fez o login');
        res.json([{ id: 1, nome: 'luiz' }]);
    }
    const login = async (req,res) =>{
        console.log(req.body);
        const usuario = req.body
        const passwordExist = await bcrypt.compare(usuario.password, "$2a$08$15ges3EwiK34FS2uCTEHWOQPndhV/etE1gniNysMhlHOUXflGPD0e")
        if(usuario.email != "email@email" || passwordExist)
        {
            return res.json({ error: true, mensagem: "usuario nao encontrado" })
        }
        /*if(! await bcrypt.compare(usuario.password, "$2a$08$ENEJxClGWc9nxKVqbTc8COd8Ltyr8NZcKl5KDs593K.tnFDMndkRK")){
            return res.json({ error: true, mensagem: "usuario nao encontrado" })
        }*/
        return res.json({ error: false, mensagem: "login" })
   
    }
    const cadastrar = async (req, res) => {
        const password = await bcrypt.hash("123456", 8);
        console.log(password);
        return res.json({ error: false, mensagem: "Cadastrar usuario" })
    }
    const get = (req, res) => {
        return res.json(users);
    }
    const save = (req, res) => {
        const user = { ...req.body };
        for (const dados of users) {
            if (dados.id == user.id || dados.name == user.name) {
                const token = jtw.sign({ userId: dados.id }, SECRET, { expiresIn: 300 });
                return res.json({ auth: true, token });
            }
        }
        return res.json("falha no login").status(401).end();

    }
    return { get, save, verificar, cadastrar,login };
}
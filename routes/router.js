const jtw = require('jsonwebtoken');
const SECRET = "teste"
function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    jtw.verify(token, SECRET, (err, decoded) => {
        if (err) return res.status(401).end();

        req.userId = decoded.userId;
        next();
    })
}
module.exports = (app) => {
    //const appVarejao = app.api.contacsPg
    // senha $2a$08$ENEJxClGWc9nxKVqbTc8COd8Ltyr8NZcKl5KDs593K.tnFDMndkRK
    app.route('/cadastrar')
        .post(app.api.user.cadastrar)
    app.route('/loginUser')
        .post(app.api.user.login)

    app.route('/cliente', verifyJWT)
        .get(app.api.user.verificar)

    app.get('/login', verifyJWT, (req, res) => {
        console.log(req.userI + 'fez o login');
        res.json([{ id: 1, nome: 'luiz' }])
    })


    app.route("/users")
        .get(app.api.user.get)
        .post(app.api.user.save)

    app.route("/contacsvarejao")
        .get(app.api.contacsPg.get)
        .post(app.api.contacsPg.save)

    app.route("/contacsvarejao/:id")
        .get(app.api.contacsPg.getByid)
        .put(app.api.contacsPg.save)

    app.route("/contacsmacapa")
        .get(app.api.contacts_mysql.get)
        .post(app.api.contacts_mysql.save)

    app.route("/contacsmacapa/:id")
        .get(app.api.contacts_mysql.getByid)
        .put(app.api.contacts_mysql.save)

}
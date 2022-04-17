module.exports = (app) => {
    //const appVarejao = app.api.contacsPg
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
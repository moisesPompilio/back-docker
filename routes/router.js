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

    
}
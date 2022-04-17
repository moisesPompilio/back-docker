const express = require('express')
const app = express()
const port = 3000
const consign = require('consign')
const {knex, knex2} = require("./config/database")

app.use(express.json());
app.db_mysql = knex;
app.db_pg = knex2;
consign().then('./api').then('./routes/router.js').into(app)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
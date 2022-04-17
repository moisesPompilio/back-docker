const configPg = require("../knexfile2.js")
const configMysql = require("../knexfile")
const knex = require("knex")(configMysql)
const knex2 = require("knex")(configPg)
module.exports = {knex, knex2};
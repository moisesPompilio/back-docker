module.exports = {
    client: 'postgresql',
    connection: {
      port : 5436,
      user : 'admin',
      password : 'admin',
      database : 'postgres'
    },
    pool:{
        min: 2,
        max: 10
    },
    migrations:{
        tableName: "knex_migrations"
    }
}
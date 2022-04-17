/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex2) {
    return knex2.schema.createTable("contacts", (table) => {
        table.increments("id").primary();
        table.string("nome","100").notNullable();
        table.string("celular","13").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex2) {
    return knex2.schema.dropTable("contacts");
};

const { Pool } = require('pg');

const db = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'envelope_budget_ii',
    user: 'me',
    password: 'passw0rd',
});

module.exports = { db };
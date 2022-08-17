const Client = require('pg')

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "Order management",
    password: "Luyennam123!",
    port: "5432",
})

module.exports = client
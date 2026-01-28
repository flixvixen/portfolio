import pkg from 'pg';
const { Client } = pkg;

export const db = new Client({
    host: "localhost",
    database: "to-do-list",
    user: "postgres",
    password: "flix027",
    port: "5432",
});

db.connect()
.then(() => console.log('Connected to PostgresSQL'))
.catch(err => console.log('Connection error', err.stack));
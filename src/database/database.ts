import { Pool } from "pg";

export const pool= new Pool({
    user: 'dario',
    host: 'localhost',
    password: 'erina',
    database: 'videogames',
    port: 5432
})
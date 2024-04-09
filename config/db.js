import pkg from 'pg';
const { Pool } = pkg;
import "dotenv/config";
const { DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

//Configuración de las variables de entorno
const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    allowExistOnIdle: true
}
const pool = new Pool(config);

//Prueba de conexión

// Crear función para obtener datos esta en queries.js
// const getDate = async () => {
//     const response = await pool.query('SELECT NOW()')
//     console.log(response.rows)
// };
// getDate();



export default pool;
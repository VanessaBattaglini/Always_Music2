import pool from '../config/db.js';
import 'dotenv/config';

//Argumentos para definir las operaciones crud
const argument = process.argv.slice(2)
const option = argument[0];
const nombre = argument[1];
const rut = argument[2];
const curso = argument[3];
const nivel = argument[4];

//Agregar usuarios
const addStudents = async (nombre, rut, curso, nivel) => {
    try {
        const sql = {
            text: "INSERT INTO music (nombre, rut, curso, nivel) VALUES($1, $2, $3, $4) RETURNING *",
            values: [nombre, rut, curso, nivel],
        };
        const response = await pool.query(sql);
        console.log('Datos ingresados correctamente', response.rows[0]);
    } catch (error) {
        console.log(error.code, error.message)
        console.log('Error en  el registro de datos', error)
    }
};
// addStudents(nombre, rut, curso, nivel);

//Mostrar todos los estudiantes de musica
const showStudents = async () => {
    try {
        const sql = {
            text: 'SELECT * FROM music',
            rowMode: "array"
,        }
        const response = await pool.query(sql);
        console.log('Registro de estudiantes mostrados con éxito', response.rows)
    } catch (error) {
        console.log(error.message);
        console.log('Estudiante no exite', error)
    }
};
// showStudents();>
//Mostrar los registros de estudiantes por rut
const getStudents = async (rut) => {
    try {
        const sql = {
            text: 'SELECT * FROM music WHERE rut = $1',
            values: [rut]
        }
        const response = await pool.query(sql);
        console.log(`El estudiante con el siguiente rut ${rut} es: `, response.rows)
    } catch (error) {
        console.log(error.message);
        console.log("Rut no identificado", error);
    }
};
getStudents(rut);

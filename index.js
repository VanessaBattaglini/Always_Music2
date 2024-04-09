import express from 'express';
import 'dotenv/config';
import router from './routes/routers.js';
const app = express();
const PORT = process.env.PORT || 3000;




app.listen(PORT, () => {
    console.log(`EL servidor se ha levantado en el port http://localhost:${PORT}`)
});
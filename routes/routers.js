import express from 'express';
import 'dotenv/config';
const router = express.Router();

app.router('/', (req, res) => {
    res.send('Welcome')
});

export default router;
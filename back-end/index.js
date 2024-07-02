import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import data from './data.js';



const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', (req, res) => {
    res.json(data);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
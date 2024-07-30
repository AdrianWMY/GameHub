import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import gameRoutes from './routes/gameRoutes.js';


const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());

app.use('/api', gameRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
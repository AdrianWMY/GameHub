import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import gameRoutes from './routes/gameRoutes.js';


const app = express();
let port;


app.use(cors());
app.use(bodyParser.json());

app.use('/api', gameRoutes);
// app.get('/api/games', (req, res) => {
//     res.send("hello worldhello worldhello worldhello world ");
// })
// app.get('/api/stores', (req, res) => {
//     res.send("************************************************** ");
// })


if (process.env.ENVIRONMENT !== 'lambda') {
    port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}



export default app;
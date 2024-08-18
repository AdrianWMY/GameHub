import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import gameRoutes from './routes/gameRoutes.js';


const app = express();
let port;


app.use(cors());
app.use(bodyParser.json());

app.use('/api', gameRoutes);

if (process.env.ENVIRONMENT !== 'lambda') {
    port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}



export default app;
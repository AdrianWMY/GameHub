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

app.get('/api/games/:gameId', (req, res) => {
    const gameId = req.params.gameId;
    const game = data.find(g => g.id === gameId);

    if (!game) {
        return res.status(404).json({ error: 'Game not found' });
    }

    res.json(game);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
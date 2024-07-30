import express from 'express';
import { getAllGames, getGameById } from '../controllers/gameController.js';

const router = express.Router();

router.get('/games', async (req, res) => {
    try {
        const games = await getAllGames();
        res.status(200).json(games);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/games/:gameId', async (req, res) => {
    const gameId = req.params.gameId;
    try {
        const game = await getGameById(gameId);
        if (!game) {
            return res.status(404).json({ error: 'Game not found' });
        }
        res.status(200).json(game);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;

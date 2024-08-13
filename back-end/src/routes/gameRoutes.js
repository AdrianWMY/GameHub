import express from 'express';
import { getAllGames, getGameById, getGameMediaById, getStoreLinksByGameId, getStoreById } from '../controllers/gameController.js';

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

router.get('/games/media/:gameId', async (req, res) => {
    const gameId = req.params.gameId;
    try {
        const gameMedia = await getGameMediaById(gameId);
        if (!gameMedia) {
            return res.status(404).json({ error: 'Game media not found' });
        }
        res.status(200).json(gameMedia);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/stores/store_links/:gameId', async (req, res) => {
    const gameId = req.params.gameId;
    try {
        const store_links = await getStoreLinksByGameId(gameId);
        if (!store_links) {
            return res.status(404).json({ error: 'Game media not found' });
        }
        res.status(200).json(store_links);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/stores/:storeId', async (req, res) => {
    const storeId = req.params.storeId;
    try {
        const store = await getStoreById(storeId);
        if (!store) {
            return res.status(404).json({ error: 'Store Name not found' });
        }
        res.status(200).json(store);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/testing', (req, res) => {
    try {

        res.status(200).json("testing testing testing testing");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;

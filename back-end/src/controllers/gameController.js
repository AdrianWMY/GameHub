import clientPromise from '../db/db.js';

const DATABASE_NAME = 'game_hub';
const COLLECTION_NAME = 'games';

async function getDatabase() {
    const client = await clientPromise();
    return client.db(DATABASE_NAME);
}

async function getCollection() {
    const db = await getDatabase();
    return db.collection(COLLECTION_NAME);
}

export async function getAllGames() {
    try {
        const collection = await getCollection();
        return await collection.find({}).toArray();
    } catch (error) {
        throw new Error('Error fetching games: ' + error.message);
    }
}

export async function getGameById(gameId) {
    try {
        const collection = await getCollection();
        return await collection.findOne({ id: gameId });
    } catch (error) {
        throw new Error('Error fetching game by ID: ' + error.message);
    }
}

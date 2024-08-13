import clientPromise from '../db/db.js';


const DATABASE_NAME = 'game_hub';

async function getDatabase() {
    const client = await clientPromise();
    return client.db(DATABASE_NAME);
}

async function getCollection(collectionName) {
    const db = await getDatabase();
    return db.collection(collectionName);
}

export async function getAllGames() {
    try {
        const collection = await getCollection("games");
        return await collection.find({}).toArray();
    } catch (error) {
        throw new Error('Error fetching games: ' + error.message);
    }
}

export async function getGameById(gameId) {

    try {
        const collection = await getCollection("games");
        const gameIdInt = parseInt(gameId, 10);
        return await collection.findOne({ id: gameIdInt });
    } catch (error) {
        throw new Error('Error fetching game by ID: ' + error.message);
    }
}
export async function getGameMediaById(gameId) {

    try {
        const collection = await getCollection("games_screenshots");
        const gameIdInt = parseInt(gameId, 10);
        return await collection.findOne({ game_id: gameIdInt });
    } catch (error) {
        throw new Error('Error fetching game by ID: ' + error.message);
    }
}

export async function getStoreLinksByGameId(gameId) {

    try {
        const collection = await getCollection("links_of_games");
        const gameIdInt = parseInt(gameId, 10);

        const allLinks = await collection.find({ game_id: gameIdInt }).toArray();

        const res = {
            allLinks
        }

        return res;
    } catch (error) {
        throw new Error('Error fetching game by ID: ' + error.message);
    }
}


export async function getStoreById(storeId) {

    try {
        const collection = await getCollection("game_stores");
        const storeIdInt = parseInt(storeId, 10);
        return await collection.findOne({ id: storeIdInt });
    } catch (error) {
        throw new Error('Error fetching game by ID: ' + error.message);
    }
}






import clientPromise from '../db/db.js';


const DATABASE_NAME = 'game_hub';

let cachedDb = null;
let cachedCollections = {};

async function getDatabase() {

    if (cachedDb) {
        return cachedDb;
    }
    const client = await clientPromise();
    cachedDb = client.db(DATABASE_NAME);
    return cachedDb;
}


async function getCollection(collectionName) {
    // Check if the collection is already cached
    if (cachedCollections[collectionName]) {
        return cachedCollections[collectionName];
    }

    // Get the database and retrieve the collection
    const db = await getDatabase();
    const collection = db.collection(collectionName);

    // Cache the collection for future use
    cachedCollections[collectionName] = collection;

    return collection;
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






import { MongoClient } from 'mongodb'
import dotenv from 'dotenv';

dotenv.config()


const uri = process.env.MONGODB_URI
if (!uri) {
    console.error('MONGODB_URI is not defined');
    throw new Error('MONGODB_URI is not defined in .env file');
}

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let cachedClient = null;

export default async function clientPromise() {
    if (cachedClient) {
        return cachedClient;
    }
    await client.connect();
    cachedClient = client;
    return cachedClient;
}



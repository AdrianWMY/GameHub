import { MongoClient } from 'mongodb'
import dotenv from 'dotenv';

dotenv.config()


const uri = process.env.MONGODB_URI

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



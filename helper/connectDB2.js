import { MongoClient } from "mongodb";

async function connectDB2() {
    try {
        let client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        return client;

    } catch (error) {
        console.log(error)
    }
}

export async function getDatabase() {
    return connectDB2().then((client) => client.db("Top-Projects"));
}

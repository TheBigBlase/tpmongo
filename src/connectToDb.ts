import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { communes?: mongoDB.Collection } = {}

export async function connectToDatabase () {
	dotenv.config();

	const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
	await client.connect();

	const db: mongoDB.Db = client.db(process.env.DB_NAME);
	const communesCollection: mongoDB.Collection = db.collection(process.env.COMMUNES_COLLECTION_NAME);

	collections.communes = communesCollection;
	console.log("Successfully connected to database: "
		+ `${db.databaseName} and collection: ${communesCollection.collectionName}`);
}

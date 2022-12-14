import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

export const client = new MongoClient(process.env.MONGOURI as string);
export const db = client.db();
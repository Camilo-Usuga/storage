// src/appwriteConfig.js
import { Client, Databases, Storage, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Tu API Endpoint
  .setProject("67aa793b001a0f78cee1"); // Tu Project ID

const databases = new Databases(client);
const storage = new Storage(client);
const account = new Account(client);

export { client, databases, storage, account };

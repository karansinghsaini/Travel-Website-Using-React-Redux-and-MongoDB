import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";


const mongoClient = app.getServiceClient(
    RemoteMongoClient.factory,
    "mongodb-atlas"
);

export const ticketDetails = mongoClient.db("users").collection("tickets");
export const items = mongoClient.db("users").collection("details");



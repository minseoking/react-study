import express from "express";
import Server from "./server.js";

const server = new Server();
const app:express.Application = server.getInstance();
const port = 7508;

app.listen(port, () => {
    console.log('open server','http://localhost:7508');
})
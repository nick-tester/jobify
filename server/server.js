import express from "express";
import dotenv from "dotenv";
import "colors";
import { notFoundMiddleware, errorHandlerMiddleware } from "./middlewares/errorHandlers.js";

dotenv.config();

const server = express();

server.get("/", (req, res) => {
    throw new Error("There was an error!");
    res.json("Test endpoint route!");
});

server.use(notFoundMiddleware);
server.use(errorHandlerMiddleware);

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`.cyan));
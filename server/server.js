import express from "express";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.get("/", (req, res) => res.send("test route"));

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}...`));
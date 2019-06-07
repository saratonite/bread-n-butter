import express from "express";
import routes from "./routes";

const server = express();

server.use(express.json());

// Attach routes
server.use("/api", routes);

export default server;

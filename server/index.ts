import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import url from "url";
import "dotenv/config";
import { v4 as uuidv4 } from "uuid";

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

const PORT = Number(process.env.PORT) || 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

wss.on("connection", (con, req) => {
  const { username } = url.parse(req.url || "", true).query;
  const uuid = uuidv4();
  console.log(`user: ${username} connected`);
});

server.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});

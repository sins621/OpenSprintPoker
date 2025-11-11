import express from "express";
import { createServer, IncomingMessage } from "http";
import WebSocket, { WebSocketServer } from "ws";
import url from "url";
import "dotenv/config";
import { v4 as uuidv4 } from "uuid";

interface User {
  username: string;
  state: Record<string, unknown>;
}

interface Connections {
  [uuid: string]: WebSocket;
}

interface Users {
  [uuid: string]: User;
}

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

const PORT = Number(process.env.PORT) || 8000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

const connections: Connections = {};
const users: Users = {};

const broadcast = (): void => {
  const message = JSON.stringify(users);
  Object.values(connections).forEach((connection) => {
    if (connection.readyState === WebSocket.OPEN) {
      connection.send(message);
    }
  });
};

const handleMessage = (bytes: Buffer, uuid: string): void => {
  try {
    const message = JSON.parse(bytes.toString());
    const user = users[uuid];
    if (!user) return;

    user.state = message;
    broadcast();
    console.log(
      `User ${user.username} sent message: ${JSON.stringify(message)}`,
    );
  } catch (error) {
    console.error("Error parsing message:", error);
  }
};

const handleClose = (uuid: string): void => {
  const user = users[uuid];
  if (user) {
    console.log(`User: ${user.username} disconnected`);
    delete connections[uuid];
    delete users[uuid];
    broadcast();
  }
};

wss.on("connection", (connection: WebSocket, request: IncomingMessage) => {
  const { username } = url.parse(request.url ?? "", true).query;

  if (typeof username !== "string") {
    console.error("Connection rejected: missing username");
    connection.close();
    return;
  }

  const uuid = uuidv4();
  console.log(`User: ${username} connected`);

  connections[uuid] = connection;
  users[uuid] = { username, state: {} };

  connection.on("message", (message: Buffer) => handleMessage(message, uuid));
  connection.on("close", () => handleClose(uuid));
});

server.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});

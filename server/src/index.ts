import { createNodeWebSocket } from "@hono/node-ws";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import "dotenv/config";

const app = new Hono();

const { injectWebSocket, upgradeWebSocket } = createNodeWebSocket({ app });
const port = Number(process.env.PORT);

app.get(
  "/ws",
  upgradeWebSocket((c) => {
    let intervalId: NodeJS.Timeout;
    return {
      onOpen(_event, ws) {
        intervalId = setInterval(() => {
          ws.send(new Date().toString());
        }, 200);
      },
      onClose() {
        clearInterval(intervalId);
      },
    };
  }),
);

const server = serve({
  fetch: app.fetch,
  port: port || 8000,
});
injectWebSocket(server);

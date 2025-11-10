import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

export const Route = createFileRoute("/ws")({
  component: RouteComponent,
});

function RouteComponent() {
  const [message, setMessage] = useState("");

  const WS_URL = "ws://localhost:8000/ws";

  const { sendJsonMessage, lastJsonMessage } = useWebSocket(WS_URL, {
    onOpen: () => console.log("Connected"),
    onError: (err) => console.error("WebSocket error:", err),
  });

  useEffect(() => {
    if (lastJsonMessage) {
      console.log("Received:", lastJsonMessage);
    }
  }, [lastJsonMessage]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() !== "") {
      sendJsonMessage({ message });
      setMessage("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          placeholder="Type message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Send" />
      </form>
    </>
  );
}

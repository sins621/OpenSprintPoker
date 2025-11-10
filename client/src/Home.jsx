import { useState } from "react";
import useWebSocket from "react-use-websocket";

export function Home({ username }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const WS_URL = "ws://localhost:8000";

  const { sendJsonMessage } = useWebSocket(WS_URL, {
    queryParams: { username },
    onOpen: () => console.log("Connected"),
    onMessage: (event) => {
      const data = JSON.parse(event.data);

      const [_uuid, user] = Object.entries(data)[0];
      const parsedMessage = {
        username: user.username,
        message: user.state.message,
      };

      setMessages((prev) => [...prev, parsedMessage]);
    },

    onError: (err) => console.error("WebSocket error:", err),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      sendJsonMessage({ message });
      setMessage("");
    }
  };

  return (
    <>
      <h1>Hello {username}</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          placeholder="Type message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Send" />
      </form>

      <h3>Messages:</h3>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.username ?? "Unknown"}:</strong>{" "}
            {msg.message ?? JSON.stringify(msg)}
          </li>
        ))}
      </ul>
    </>
  );
}

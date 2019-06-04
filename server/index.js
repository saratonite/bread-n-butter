import next from "next";
import express from "express";

const { ENV, PORT = 3000 } = process.env;
const dev = ENV !== "production";
const app = next({ dev });

const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    handler(req, res);
  });

  server.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
});

import next from "next";
import server from "./server";

const { NODE_ENV, PORT = 3000 } = process.env;
const dev = NODE_ENV !== "production";
const app = next({ dev });

const handler = app.getRequestHandler();

app.prepare().then(() => {
  server.get("*", (req, res) => {
    handler(req, res);
  });

  server.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
});

import dotenv from "dotenv";
dotenv.config();
import next from "next";
import mongoose from "mongoose";
import server from "./server";

const {
  NODE_ENV,
  PORT = 3000,
  MONGODB_HOST = "mongodb://127.0.0.1:27017/bnb"
} = process.env;
const dev = NODE_ENV !== "production";
const app = next({ dev });

const handler = app.getRequestHandler();

(async () => {
  // Connect mongodb
  await mongoose.connect(MONGODB_HOST, { useNewUrlParser: true });

  // Start server
  app.prepare().then(() => {
    server.get("*", (req, res) => {
      handler(req, res);
    });

    server.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  });
})();

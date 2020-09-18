require("dotenv/config");
require("./config/mongo");

const express = require("express");
const http = require("http");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const server = http.Server(app);
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port, () => {
  return console.log(`Listening on port ${port}`);
});

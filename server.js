const dotenv = require("dotenv");
dotenv.config();
require("./connection.js");
const express = require("express");
const cors = require("cors");
const routes = require("./routes/router.js");
const PORT = process.env.PORT || 8888;

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api", routes);

app.get("/", (req, res) => {
  return res.json({ message: "Server is run!" });
});

function startServerOnPort(port) {
  const listen = app.listen(port, () =>
    console.log(`server is running ${port}`)
  );
  listen.on("error", () => {
    console.log(`Port ${port} is busy. Trying a different port...`);
    startServerOnPort(port + 1);
  });
}

startServerOnPort(PORT);
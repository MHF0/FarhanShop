const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
const cors = require("cors");
require("dotenv").config();
require("./database/connect");

// app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is runing on ${PORT}`));

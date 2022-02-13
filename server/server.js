const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./database/connect")

// app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is runing on ${PORT}`));

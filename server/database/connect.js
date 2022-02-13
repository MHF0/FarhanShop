const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Database connect"))
  .catch((err) => console.log(`There is an err in your Database ${err}`));

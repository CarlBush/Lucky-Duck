const express = require("express");
const mongoose = require("mongoose");
const db = require('./config/connection');
const dotenv = require("dotenv");
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 8800;

dotenv.config();

app.use(express.json());


app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
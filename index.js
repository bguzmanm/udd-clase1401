const express = require('express');
const connectDb = require('./config/db');
const cors = require("cors");
const app = express();

require("dotenv").config();
const routes = require("./routes");

connectDb();

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`listent in port ${process.env.PORT}`);
});


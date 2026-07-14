require("dotenv").config();
const express = require("express");
const connedtDB = require("./config/db");
const cors = require("cors");
const { errorHandler, notFound } = require("./middlewares/errorHandler");
const routes = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());

//api routes
app.use("/api", routes);

app.use("/health", (req, res) => res.send("Servier is healthy"));

app.use(notFound);
app.use(errorHandler);
let server;
const startServer = async () => {
  try {
    await connedtDB();
    server = app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(`Error: Filed to start server: ${error}`);
  }
};

startServer();

// import modules
const express = require("express");
const { json, urlencoded } = express;
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// app
const app = express();

// db
mongoose
  .connect(process.env.MONGO_URI, {
    // connects to your .env file and loads the MONGO_URI value
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

// middleware
app.use(morgan("dev")); //logs requests. helps with debugging
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true })); //communicating between front and back end

// routes
app.use("/user", require('./routes/user'));

// port
const port = process.env.PORT || 8080; //use PORT set up in enVars, or use 8080

// listener
const server = app.listen(port, () =>
  console.log(`server is running on port ${port}`)
);

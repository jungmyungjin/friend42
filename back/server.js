const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8080;
const session = require("express-session");

connectDB();

const server = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(
  session({ resave: false, saveUninitialized: false, secret: "!Seoul" })
);
server.use(passport.initialize());
server.use(passport.session());

server.use("/", require("./routers/userRouters.js"));
server.use(errorHandler);

server.get("/", (req, res) => {
  res.json({ message: `Server is running on port ${PORT}!` });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));

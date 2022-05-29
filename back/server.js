const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8080;

connectDB();

const server = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

server.use(express.json());
// bodyParser 쓰지 않으면, 사용을 하던데 해당 코드의 역할은????
// server.use(express.urlencoded({ extended: false }));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cookieParser());

server.use("/", require("./routers/userRouters.js"));
server.use(errorHandler);

server.get("/", (req, res) => {
  res.json({ message: `Server is running on port ${PORT}!` });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}!`));

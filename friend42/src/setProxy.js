const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("/api", { target: "http://localhost/" }));
};

import axios from "axios";
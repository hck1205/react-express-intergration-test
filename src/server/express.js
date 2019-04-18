import express from "express";
import path from "path";
import axios from "axios";
import cors from "cors";
import { apiUrl, apiKey } from "../config/config";

const server = express();

const webpack = require("webpack");
const config = require("../../config/webpack.config.js");
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);
const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);
server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

const staticMiddleware = express.static("dist");
server.use(staticMiddleware);

server.use(cors());

server.get('/api/beers/:page', (req, res) => {
  let page = req.params.page;
  let apiAddr = `${apiUrl}beers?key=${apiKey}&p=${page}`;

  axios.get(apiAddr).then(response => {
    res.send(response.data);
  }).catch(err => {
    console.log(err);
    res.send(500).send("error");
  });
});

server.listen(8080, () => {
  console.log("server is listening");
});
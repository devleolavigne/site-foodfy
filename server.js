const express = require("express");
const nunjucks = require("nunjucks");
const receitas = require("./data");

const server = express();

server.use(express.static("public"));
server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server
});

server.get("/", (req, res) => {
  return res.render("index", { receitas });
});
server.get("/sobre", (req, res) => {
  return res.render("sobre");
});
server.get("/receitas", (req, res) => {
  return res.render("receitas", { receitas });
});
server.get("/receita", (req, res) => {
  return res.render("receita");
});

server.listen(3333);

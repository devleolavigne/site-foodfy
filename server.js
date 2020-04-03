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

server.get("/receita/:id", (req, res) => {
  const id = req.params.id;
  const receita = receitas.find(receita => {
    if (receita.id == id) {
      return true;
    }
  });
  if (!receita) {
    return res.render("not-found");
  }
  return res.render("receita", { receita });
});

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(3000);

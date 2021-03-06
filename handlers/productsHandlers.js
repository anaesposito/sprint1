const { updateOneObj } = require("../functions.js");
const { readFromJson } = require("../functions.js");
const { getOneObj } = require("../functions.js");
const { createOneObject } = require("../functions.js");
const { deleteObj } = require("../functions.js");

let entityFile = "./data/products.json";
let entityName = "product";

const listOfProducts = (req, res) => {
  res.send(readFromJson(entityFile));
};

const getOneProduct = (req, res) => {
  getOneObj(req, res, entityFile, entityName);
};

const createProduct = (req, res, next) => {
  const model = {
    id: Number(req.body.id),
    name: req.body.name,
    price: Number(req.body.price),
    quantity: Number(req.body.quantity),
  };
  createOneObject(req, res, next, model, entityFile);
};

const updateProduct = (req, res, next) => {
  const model = {
    id: Number(req.body.id),
    name: req.body.name,
    price: Number(req.body.price),
    quantity: Number(req.body.quantity),
  };

  updateOneObj(req, res, next, model, entityFile, entityName);
};

const deleteProduct = (req, res, next) => {
  deleteObj(req, res, next, entityFile);
};

module.exports = {
  getOneProduct,
  listOfProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};

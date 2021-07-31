const { updateOneObj } = require("../functions.js");
const { readFromJson } = require("../functions.js");
const { getOneObj } = require("../functions.js");
const { createOneObject } = require("../functions.js");
const { deleteObj } = require("../functions.js");

const model = (req, res) => {
  return {
    id: Number(req.body.id),
    name: req.body.name,
    price: Number(req.body.price),
    quantity: Number(req.body.quantity),
  };
};
let entityFile = "./data/products.json";
let entityName = "product";

const listOfProducts = (req, res) => {
  res.send(readFromJson("./data/products.json"));
};

const getOneProduct = (req, res, entityFile, entityName) => {
  getOneObj(req, res, entityFile, entityName);
};

const createProduct = (req, res, next, model, entityFile) => {
  createOneObject(req, res, next, model, entityFile);
};

const updateProduct = (req, res, next, model, entityFile, entityName) => {
  updateOneObj(req, res, next, model, entityFile, entityName);
};

const deleteProduct = (req, res, next, entityFile) => {
  deleteObj(req, res, next, entityFile);
};

module.exports = {
  getOneProduct,
  listOfProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};

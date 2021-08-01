const { updateOneObj } = require("../functions.js");
const { readFromJson } = require("../functions.js");
const { getOneObj } = require("../functions.js");
const { createOneObject } = require("../functions.js");
const { deleteObj } = require("../functions.js");

const entityFile = "./data/orders.json";
const entityName = "order";

const listOfOrders = (req, res) => {
  res.send(readFromJson(entityFile));
};

const getOneOrder = (req, res) => {
  getOneObj(req, res, entityFile, entityName);
};

const createOrder = (req, res, next) => {
  const model = {
    id: Number(req.body.id),
    time: req.body.time,
    user: req.body.user,
    items: req.body.items,
    //products.name, products.price ,
    deliveryAdress: req.body.deliveryAdress,
    status: req.body.status,
    openForChanges: req.body.openForChanges,
    totalPrice: req.body.totalPrice,
    typeOfPayment: req.body.typeOfPayment,
  };
  createOneObject(req, res, next, model, entityFile);
};

const updateOrder = (req, res, next) => {
  let model = {
    id: Number(req.params.id),
    time: req.body.time,
    user: req.body.user,
    items: req.body.items,
    //products.name, products.price ,
    deliveryAdress: req.body.deliveryAdress,
    status: req.body.status,
    openForChanges: req.body.openForChanges,
    totalPrice: req.body.totalPrice,
    typeOfPayment: req.body.typeOfPayment,
  };

  updateOneObj(req, res, next, model, entityFile, entityName);
};

const deleteOrder = (req, res, next) => {
  deleteObj(req, res, next, entityFile);
};

module.exports = {
  listOfOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};

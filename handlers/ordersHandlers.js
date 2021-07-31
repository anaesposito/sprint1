const { updateOneObj, deleteObj } = require("../functions.js");
const { readFromJson } = require("../functions.js");
const { getOneObj } = require("../functions.js");
const { createOneObject } = require("../functions.js");

const listOfOrders = (req, res) => {
  res.send(readFromJson("./data/orders.json"));
};

const getOneOrder = (req, res) => {
  let entityFile = "./data/orders.json";
  let entityName = "order";
  getOneObj(req, res, entityFile, entityName);
};
const createOrder = (req, res, next) => {
  let entityFile = "./data/orders.json";
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
  let entityFile = "./data/orders.json";
  let entityName = "orders";
  let order = {
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

  updateOneObj(req, res, next, order, entityFile, entityName);
};

const deleteOrder = (req, res, next) => {
  let entityFile = "./data/orders.json";
  let entityName = "orders";
  deleteObj(req, res, next, entityFile, entityName);
};

module.exports = {
  listOfOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};

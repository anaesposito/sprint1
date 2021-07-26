const { update } = require("../functions.js");
const { readFromJson } = require("../functions.js");
const { getOneObj } = require("../functions.js");

const listOfOrders = (req, res) => {
  res.send(readFromJson("./data/orders.json"));
};

const getOneOrder = (req, res) => {
  let entityFile = "./data/orders.json";
  let entityName = "order";
  getOneObj(req, res, entityFile, entityName);
};
const createOrder = (req, res) => {};

// (req, res, next, model, entityFile, entityName
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

  update(req, res, next, order, entityFile);
};

const deleteOrder = (req, res) => {};

module.exports = {
  listOfOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  //   deleteOrder
};

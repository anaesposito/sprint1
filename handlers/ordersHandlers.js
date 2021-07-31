const { updateOneObj } = require("../functions.js");
const { readFromJson } = require("../functions.js");
const { getOneObj } = require("../functions.js");
const { createOneObject } = require("../functions.js");
const { deleteObj } = require("../functions.js");

// const model = (req, res) => {
//   return {
//     id: Number(req.body.id),
//     time: req.body.time,
//     user: req.body.user,
//     items: req.body.items,
//     //products.name, products.price ,
//     deliveryAdress: req.body.deliveryAdress,
//     status: req.body.status,
//     openForChanges: req.body.openForChanges,
//     totalPrice: req.body.totalPrice,
//     typeOfPayment: req.body.typeOfPayment,
//   };
// };
const entityFile = "./data/orders.json";
const entityName = "order";

const listOfOrders = (req, res) => {
  res.send(readFromJson("./data/orders.json"));
};

const getOneOrder = (req, res, entityFile, entityName) => {
  getOneObj(req, res, entityFile, entityName);
};

const createOrder = (req, res, next, model, entityFile) => {
  createOneObject(req, res, next, model, entityFile);
};

const updateOrder = (req, res, next, model, entityFile, entityName) => {
  updateOneObj(req, res, next, model, entityFile, entityName);
};

const deleteOrder = (req, res, next, entityFile) => {
  deleteObj(req, res, next, entityFile);
};

module.exports = {
  listOfOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};

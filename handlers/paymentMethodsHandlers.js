const { updateOneObj } = require("../functions.js");
const { readFromJson } = require("../functions.js");
const { getOneObj } = require("../functions.js");
const { createOneObject } = require("../functions.js");
const { deleteObj } = require("../functions.js");

// paymentMethod

const entityFile = "./data/paymentMethods.json";
const entityName = "paymentMethods";

const listOfPaymentsMethod = (req, res) => {
  res.send(readFromJson(entityFile));
};

const getOnePaymentMethod = (req, res) => {
  getOneObj(req, res, entityFile, entityName);
};

const createPaymentMethod = (req, res, next) => {
  const model = {
    id: Number(req.body.id),
    name: req.body.name,
    installments: Number(req.body.installments),
  };
  createOneObject(req, res, next, model, entityFile);
};

const updatePaymentMethod = (req, res, next) => {
  const model = {
    id: Number(req.body.id),
    name: req.body.name,
    installments: Number(req.body.installments),
  };
  updateOneObj(req, res, next, model, entityFile, entityName);
};
const deletePaymentMethod = (req, res, next) => {
  deleteObj(req, res, next, entityFile);
};

module.exports = {
  listOfPaymentsMethod,
  getOnePaymentMethod,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
};

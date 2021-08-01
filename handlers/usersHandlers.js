const { updateOneObj } = require("../functions.js");
const { readFromJson } = require("../functions.js");
const { getOneObj } = require("../functions.js");
const { createOneObject } = require("../functions.js");
const { deleteObj } = require("../functions.js");

// enconde btoa()
//decode atob()

const listOfUsers = (req, res) => {
  res.send(readFromJson("./data/user.json"));
};

const getOneUser = (req, res) => {
  const entityName = "user";
  let entityFile = "./data/user.json";
  getOneObj(req, res, entityFile, entityName);
};

const registerUser = (req, res, next) => {
  let entityFile = "./data/user.json";

  const model = {
    id: Number(req.body.id),
    userName: req.body.userName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    deliveryAdress: req.body.deliveryAdress,
    password: req.body.password,
    type: req.body.type,
  };
  createOneObject(req, res, next, model, entityFile);
};

const updateUser = (req, res, next) => {
  let entityFile = "./data/user.json";
  const entityName = "user";
  const model = {
    id: Number(req.body.id),
    userName: req.body.username,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    deliveryAdress: req.body.deliveryAdress,
    password: req.body.password,
    type: req.body.type,
  };
  updateOneObj(req, res, next, model, entityFile, entityName);
};

const deleteUser = (req, res, next) => {
  let entityFile = "./data/user.json";
  deleteObj(req, res, next, entityFile);
};

module.exports = {
  // loginUsers,

  listOfUsers,
  getOneUser,
  registerUser,
  updateUser,
  deleteUser,
};

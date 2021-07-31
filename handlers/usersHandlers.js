const { updateOneObj } = require("../functions.js");
const { readFromJson } = require("../functions.js");
const { getOneObj } = require("../functions.js");
const { createOneObject } = require("../functions.js");
const { deleteObj } = require("../functions.js");

// enconde btoa()
//decode atob()

const model = (req, res) => {
  return {
    id: Number(req.body.id),
    userName: req.body.username,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    deliveryAdress: req.body.deliveryAdress,
    password: req.body.password,
    type: req.body.type,
  };
};
let entityFile = "./data/user.json";
let entityName = "user";

const loginUsers = (req, res) => {};
// const registerUsers = (req, res) => {

// };
const createUser = (req, res, next, model, entityFile) => {
  createOneObject(req, res, next, model, entityFile);
};

const updateUser = (req, res, next, model, entityFile, entityName) => {
  updateOneObj(req, res, next, model, entityFile, entityName);
};

const listOfUsers = (req, res) => {
  res.send(readFromJson("./data/user.json"));
};
const getOneUser = (req, res, entityFile, entityName) => {
  getOneObj(req, res, entityFile, entityName);
};
const deleteUser = (req, res, next, entityFile) => {
  deleteObj(req, res, next, entityFile);
};

module.exports = {
  loginUsers,
  // registerUsers,
  createUser,
  updateUser,
  listOfUsers,
  getOneUser,
  deleteUser,
};
